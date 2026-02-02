import { Image } from "expo-image";
import { Link, useRouter } from "expo-router";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, StyleSheet, View } from "react-native";

import { ProfileGroup, ProfileRow, ProfileSection } from "@/components/profile";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import {
  RADIUS_SMALL,
  Spacing
} from "@/constants/design-system";
import { profileListStyles } from "@/constants/profile-list";
import { useThemeColor } from "@/hooks/use-theme-color";
import { defaultProfile } from "@/lib/profile-placeholder";

const AVATAR_SIZE = 96;

type ProfileRoute =
  | "/profile/edit"
  | "/profile/account-identity"
  | "/profile/security-privacy"
  | "/profile/devices-sessions"
  | "/profile/data-activity";

const QUICK_ACTIONS: ReadonlyArray<{ label: string; href: ProfileRoute }> = [
  { label: "Edit Profile", href: "/profile/edit" },
  { label: "Account & Identity", href: "/profile/account-identity" },
  { label: "Security & Privacy", href: "/profile/security-privacy" },
  { label: "Devices / Sessions", href: "/profile/devices-sessions" },
] as const;

const ProfileScreen: React.FC = () => {
  const router = useRouter();
  const surfaceColor = useThemeColor({}, "surface");
  const separatorColor = useThemeColor({}, "separator");
  const secondaryColor = useThemeColor({}, "secondary");
  const [profile] = useState(defaultProfile);

  const displayName = useMemo(
    () =>
      [profile.firstName, profile.lastName].filter(Boolean).join(" ") || "User",
    [profile.firstName, profile.lastName]
  );
  const primaryContact = profile.email || profile.phone || "—";

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        style={[profileListStyles.scroll, { paddingTop: 40 }]}
        contentContainerStyle={profileListStyles.scrollContent}
        showsVerticalScrollIndicator={false}
        directionalLockEnabled={true}
        scrollEventThrottle={16}
      >
        {/* Avatar & identity */}
        <View style={styles.header}>
          <Link href="/profile/edit" asChild>
            <Pressable
              style={({ pressed }) => [
                styles.avatarWrap,
                pressed && styles.avatarPressed,
              ]}
              accessibilityLabel="Edit profile photo"
              accessibilityRole="button"
            >
              {profile.avatarUri ? (
                <Image
                  source={{ uri: profile.avatarUri }}
                  style={styles.avatar}
                />
              ) : (
                <View
                  style={[
                    styles.avatarPlaceholder,
                    { backgroundColor: secondaryColor },
                  ]}
                >
                  <ThemedText type="titleLarge" style={styles.avatarInitials}>
                    {profile.firstName?.[0] ?? ""}
                    {profile.lastName?.[0] ?? ""}
                  </ThemedText>
                </View>
              )}
            </Pressable>
          </Link>
          <ThemedText type="titleLarge" style={styles.displayName}>
            {displayName}
          </ThemedText>
          {profile.username ? (
            <ThemedText
              type="bodySecondary"
              colorName="secondary"
              style={styles.username}
            >
              @{profile.username}
            </ThemedText>
          ) : null}
          <ThemedText
            type="bodySecondary"
            colorName="secondary"
            style={styles.primaryContact}
          >
            {primaryContact}
          </ThemedText>
          <View style={[styles.badge, { backgroundColor: surfaceColor }]}>
            <ThemedText type="caption" colorName="secondary">
              {profile.accountStatus}
            </ThemedText>
          </View>
        </View>

        {/* Account, Security, Preferences (grouped) */}
        <ProfileSection>
          <ProfileGroup>
            {QUICK_ACTIONS.map((action, index) => (
              <ProfileRow
                key={action.href}
                label={action.label}
                showDisclosure
                hasBorder={index < QUICK_ACTIONS.length - 1}
                borderColor={separatorColor}
                onPress={() => router.push(action.href)}
                accessibilityLabel={action.label}
              />
            ))}
          </ProfileGroup>
        </ProfileSection>

        <ProfileSection>
          <ProfileGroup>
            <ProfileRow
              label="Data & Activity"
              showDisclosure
              hasBorder={false}
              onPress={() => router.push("/profile/data-activity")}
              accessibilityLabel="Data & Activity"
            />
          </ProfileGroup>
        </ProfileSection>
      </ScrollView>
    </ThemedView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    alignItems: "center",
    paddingVertical: Spacing.xl,
    paddingHorizontal: Spacing.md,
  },
  avatarWrap: {
    marginBottom: Spacing.sm,
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
    alignItems: "center",
    justifyContent: "center",
  },
  avatarInitials: {
    color: "#fff",
  },
  displayName: {
    marginBottom: Spacing.xxs,
  },
  username: {
    marginBottom: Spacing.xxs,
  },
  primaryContact: {
    marginBottom: Spacing.xs,
  },
  badge: {
    paddingHorizontal: Spacing.sm,
    paddingVertical: Spacing.xxs,
    borderRadius: RADIUS_SMALL,
  },
});
