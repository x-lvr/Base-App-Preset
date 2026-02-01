import { Stack } from 'expo-router';

export default function ProfileStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerLargeTitle: false,
      }}>
      <Stack.Screen name="index" options={{ title: 'Profile' }} />
      <Stack.Screen name="edit" options={{ title: 'Edit Profile' }} />
      <Stack.Screen name="account-identity" options={{ title: 'Account & Identity' }} />
      <Stack.Screen name="security-privacy" options={{ title: 'Security & Privacy' }} />
      <Stack.Screen name="devices-sessions" options={{ title: 'Devices & Sessions' }} />
      <Stack.Screen name="data-activity" options={{ title: 'Data & Activity' }} />
    </Stack>
  );
}
