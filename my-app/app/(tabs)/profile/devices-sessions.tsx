import { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { profileListStyles } from '@/constants/profile-list';
import { defaultSessions, type SessionItem } from '@/lib/profile-placeholder';

function SessionRow({ item, isLast }: { item: SessionItem; isLast: boolean }) {
  return (
    <View style={[profileListStyles.row, !isLast && profileListStyles.rowBorder]}>
      <View style={styles.sessionInfo}>
        <ThemedText style={styles.deviceName}>
          {item.deviceName}
          {item.isCurrent ? ' (this device)' : ''}
        </ThemedText>
        <ThemedText style={styles.sessionMeta}>
          {item.platform} · {item.lastActive}
        </ThemedText>
      </View>
    </View>
  );
}

export default function DevicesSessionsScreen() {
  const [sessions] = useState(defaultSessions);

  const handleLogoutOtherDevices = () => {
    Alert.alert(
      'Log out from other devices',
      'You will stay logged in on this device. Other sessions will be signed out.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Log out others', style: 'destructive', onPress: () => {} },
      ]
    );
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        style={profileListStyles.scroll}
        contentContainerStyle={profileListStyles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={profileListStyles.section}>
          <View style={profileListStyles.sectionHeader}>
            <ThemedText style={styles.sectionTitle}>Active sessions</ThemedText>
          </View>
          <View style={profileListStyles.group}>
            {sessions.map((item, index) => (
              <SessionRow
                key={item.id}
                item={item}
                isLast={index === sessions.length - 1}
              />
            ))}
          </View>
        </View>

        <View style={profileListStyles.section}>
          <Pressable
            onPress={handleLogoutOtherDevices}
            style={({ pressed }) => [
              profileListStyles.row,
              styles.logoutOthersButton,
              pressed && styles.pressed,
            ]}>
            <ThemedText style={styles.logoutOthersText}>Log out from other devices</ThemedText>
          </Pressable>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    opacity: 0.7,
    textTransform: 'uppercase',
  },
  sessionInfo: {
    flex: 1,
  },
  deviceName: {
    fontSize: 16,
    fontWeight: '500',
  },
  sessionMeta: {
    fontSize: 13,
    opacity: 0.7,
    marginTop: 2,
  },
  logoutOthersButton: {
    justifyContent: 'center',
  },
  logoutOthersText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#0a7ea4',
  },
  pressed: {
    opacity: 0.7,
  },
});
