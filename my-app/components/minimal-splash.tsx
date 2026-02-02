import React from 'react';
import { View, Text, StyleSheet, Platform, LayoutChangeEvent } from 'react-native';
import Constants from 'expo-constants';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Colors } from '@/constants/theme';

interface Props {
  onLayout?: () => void;
}

export default function MinimalSplash({ onLayout }: Props) {
  const colorScheme = useColorScheme();
  const colors = Colors[colorScheme];
  const appName = Constants.manifest?.name ?? (Constants.expoConfig && (Constants.expoConfig.name as string)) ?? 'App';

  return (
    <View
      style={[styles.container, { backgroundColor: colors.background }]}
      pointerEvents="none"
      onLayout={() => {
        if (typeof onLayout === 'function') onLayout();
      }}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
    >
      <Text
        style={[
          styles.title,
          {
            color: colors.text,
            ...Platform.select({
              android: { fontFamily: 'sans-serif-medium' },
            }),
          },
        ]}
        accessibilityRole="header"
      >
        {appName}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
  },
});
