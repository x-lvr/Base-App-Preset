import { Link } from 'expo-router';
import { Image } from 'expo-image';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { profileListStyles } from '@/constants/profile-list';
import { defaultProfile } from '@/lib/profile-placeholder';

const AVATAR_SIZE = 96;

export default function ProfileScreen() {
  const [profile] = useState(defaultProfile);
  const displayName = [profile.firstName, profile.lastName].filter(Boolean).join(' ') || 'User';
  const primaryContact = profile.email || profile.phone || '—';

  const quickActions = [
    { label: 'Edit Profile', href: '/profile/edit' },
    { label: 'Account & Identity', href: '/profile/account-identity' },
    { label: 'Security & Privacy', href: '/profile/security-privacy' },
    { label: 'Devices / Sessions', href: '/profile/devices-sessions' },
  ] as const;

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        style={profileListStyles.scroll}
        contentContainerStyle={profileListStyles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Avatar & identity */}
        <View style={styles.header}>
          <Link href="/profile/edit" asChild>
            <Pressable style={({ pressed }) => [styles.avatarWrap, pressed && styles.avatarPressed]}>
              {profile.avatarUri ? (
                <Image source={{ uri: profile.avatarUri }} style={styles.avatar} />
              ) : (
                <View style={styles.avatarPlaceholder}>
                  <ThemedText type="title" style={styles.avatarInitials}>
                    {profile.firstName?.[0] ?? ''}{profile.lastName?.[0] ?? ''}
                  </ThemedText>
                </View>
              )}
            </Pressable>
          </Link>
          <ThemedText type="title" style={styles.displayName}>
            {displayName}
          </ThemedText>
          {profile.username ? (
            <ThemedText style={styles.username}>@{profile.username}</ThemedText>
          ) : null}
          <ThemedText style={styles.primaryContact}>{primaryContact}</ThemedText>
          <View style={styles.badge}>
            <ThemedText style={styles.badgeText}>{profile.accountStatus}</ThemedText>
          </View>
        </View>

        {/* Quick actions */}
        <View style={profileListStyles.section}>
          <View style={profileListStyles.group}>
            {quickActions.map((action, index) => (
              <Link key={action.href} href={action.href as any} asChild>
                <Pressable
                  style={({ pressed }) => [
                    profileListStyles.row,
                    index < quickActions.length - 1 && profileListStyles.rowBorder,
                    pressed && styles.rowPressed,
                  ]}>
                  <ThemedText style={profileListStyles.rowLabel}>{action.label}</ThemedText>
                  <ThemedText style={profileListStyles.rowValueMuted}>›</ThemedText>
                </Pressable>
              </Link>
            ))}
          </View>
        </View>

        {/* Data & Activity link */}
        <View style={profileListStyles.section}>
          <View style={profileListStyles.group}>
            <Link href="/profile/data-activity" asChild>
              <Pressable
                style={({ pressed }) => [
                  profileListStyles.row,
                  pressed && styles.rowPressed,
                ]}>
                <ThemedText style={profileListStyles.rowLabel}>Data & Activity</ThemedText>
                <ThemedText style={profileListStyles.rowValueMuted}>›</ThemedText>
              </Pressable>
            </Link>
          </View>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  avatarWrap: {
    marginBottom: 12,
  },
  avatarPressed: {
    opacity: 0.8,
  },
  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
  },
  avatarPlaceholder: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    backgroundColor: 'rgba(128,128,128,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: {
    fontSize: 32,
    color: '#fff',
  },
  displayName: {
    marginBottom: 4,
  },
  username: {
    fontSize: 15,
    opacity: 0.8,
    marginBottom: 4,
  },
  primaryContact: {
    fontSize: 15,
    opacity: 0.8,
    marginBottom: 8,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: 'rgba(128,128,128,0.2)',
  },
  badgeText: {
    fontSize: 13,
    fontWeight: '600',
  },
  rowPressed: {
    opacity: 0.7,
  },
});
