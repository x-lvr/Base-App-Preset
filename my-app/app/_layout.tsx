import React, { useEffect, useState } from 'react';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import * as SplashScreen from 'expo-splash-screen';
import { InteractionManager } from 'react-native';

import { useColorScheme } from '@/hooks/use-color-scheme';
import MinimalSplash from '@/components/minimal-splash';

// Ensure the native splash won't auto-hide before JS runs (module scope as early as possible)
SplashScreen.preventAutoHideAsync().catch(() => {});

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayLayoutReady, setOverlayLayoutReady] = useState(false);

  useEffect(() => {
    let mounted = true;
    let hideTimer: NodeJS.Timeout | undefined;
    let overlayTimer: NodeJS.Timeout | undefined;

    async function prepare() {
      try {
        // Wait for JS/UI to settle (fonts/initial setup would be awaited here if present).
        // Use the callback form to support web's InteractionManagerStub which expects a task callback.
        await new Promise<void>((resolve) => InteractionManager.runAfterInteractions(() => resolve()));
        // Small extra tick to make sure layout is ready.
        await new Promise((res) => setTimeout(res, 50));
      } catch {}

      if (!mounted) return;

      // Render RN overlay that exactly matches native splash, then hide native splash.
      setOverlayVisible(true);
      await SplashScreen.hideAsync().catch(() => {});

      // Wait until the RN overlay has reported layout to avoid any flicker.
      const maxWait = 2000;
      const start = Date.now();
      while (mounted && !overlayLayoutReady && Date.now() - start < maxWait) {
        // Polling briefly; this should succeed quickly when the overlay mounts.
        // Using a tiny delay keeps this loop cooperative.
        // eslint-disable-next-line no-await-in-loop
        await new Promise((res) => setTimeout(res, 5));
      }

      if (!mounted) return;

      // Keep the RN overlay for a short, smooth period, then hide it.
      overlayTimer = setTimeout(() => setOverlayVisible(false), 300);
    }

    prepare();

    return () => {
      mounted = false;
      if (hideTimer) clearTimeout(hideTimer);
      if (overlayTimer) clearTimeout(overlayTimer);
    };
  }, [overlayLayoutReady]);

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="modal" options={{ presentation: 'modal', headerShown: false }} />
      </Stack>
      <StatusBar style="auto" />
      {overlayVisible && <MinimalSplash onLayout={() => setOverlayLayoutReady(true)} />}
    </ThemeProvider>
  );
}
