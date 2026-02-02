import { Stack } from 'expo-router';

export default function ProfileStackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="edit" />
      <Stack.Screen name="account-identity" />
      <Stack.Screen name="security-privacy" />
      <Stack.Screen name="devices-sessions" />
      <Stack.Screen name="data-activity" />
    </Stack>
  );
}
