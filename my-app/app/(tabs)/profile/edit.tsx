import { Image } from "expo-image";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
    Alert,
    Pressable,
    ScrollView,
    StyleSheet,
    TextInput,
    View,
} from "react-native";

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

const BIO_MAX_LENGTH = 120;
const AVATAR_SIZE = 80;

const EditProfileScreen: React.FC = () => {
  const router = useRouter();
  const textColor = useThemeColor({}, "text");
  const secondaryColor = useThemeColor({}, "secondary");
  const separatorColor = useThemeColor({}, "separator");
  const accentColor = useThemeColor({}, "accent");

  const [firstName, setFirstName] = useState(defaultProfile.firstName);
  const [lastName, setLastName] = useState(defaultProfile.lastName);
  const [username, setUsername] = useState(defaultProfile.username);
  const [bio, setBio] = useState(defaultProfile.bio);
  const [avatarUri] = useState(defaultProfile.avatarUri);

  const handleSave = (): void => {
    Alert.alert("Saved", "Profile updated.", [
      { text: "OK", onPress: () => router.back() },
    ]);
  };

  const handleChangePhoto = (): void => {
    Alert.alert("Change Photo", "Choose photo or remove?", [
      { text: "Cancel", style: "cancel" },
      { text: "Choose Photo", onPress: () => {} },
      { text: "Remove Photo", style: "destructive", onPress: () => {} },
    ]);
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        style={[profileListStyles.scroll, { paddingTop: 40 }]}
        contentContainerStyle={profileListStyles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        directionalLockEnabled={true}
        scrollEventThrottle={16}
      >
        <ProfileSection>
          <Pressable
            onPress={handleChangePhoto}
            style={({ pressed }) => [
              styles.avatarRow,
              pressed && styles.pressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Change profile photo"
          >
            <View style={styles.avatarRowInner}>
              {avatarUri ? (
                <Image source={{ uri: avatarUri }} style={styles.avatar} />
              ) : (
                <View
                  style={[
                    styles.avatarPlaceholder,
                    { backgroundColor: secondaryColor },
                  ]}
                >
                  <ThemedText type="screenTitle" style={styles.avatarInitials}>
                    {firstName?.[0] ?? ""}
                    {lastName?.[0] ?? ""}
                  </ThemedText>
                </View>
              )}
              <ThemedText type="bodyPrimary" colorName="accent">
                Change photo
              </ThemedText>
            </View>
          </Pressable>
        </ProfileSection>

        <ProfileSection>
          <ProfileGroup>
            <ProfileRow
              label="First name"
              rightElement={
                <TextInput
                  style={[styles.input, { color: textColor }]}
                  value={firstName}
                  onChangeText={setFirstName}
                  placeholder="First name"
                  placeholderTextColor={secondaryColor}
                  autoCapitalize="words"
                />
              }
              hasBorder
              borderColor={separatorColor}
            />
            <ProfileRow
              label="Last name"
              rightElement={
                <TextInput
                  style={[styles.input, { color: textColor }]}
                  value={lastName}
                  onChangeText={setLastName}
                  placeholder="Last name"
                  placeholderTextColor={secondaryColor}
                  autoCapitalize="words"
                />
              }
              hasBorder
              borderColor={separatorColor}
            />
            <ProfileRow
              label="Username"
              rightElement={
                <TextInput
                  style={[styles.input, { color: textColor }]}
                  value={username}
                  onChangeText={setUsername}
                  placeholder="@username"
                  placeholderTextColor={secondaryColor}
                  autoCapitalize="none"
                />
              }
              hasBorder={false}
            />
          </ProfileGroup>
        </ProfileSection>

        <ProfileSection title="Short bio">
          <View style={styles.bioHeaderRow}>
            <ThemedText type="caption" colorName="secondary">
              {bio.length}/{BIO_MAX_LENGTH}
            </ThemedText>
          </View>
          <TextInput
            style={[
              styles.bioInput,
              { color: textColor, borderColor: separatorColor },
            ]}
            value={bio}
            onChangeText={(t) => setBio(t.slice(0, BIO_MAX_LENGTH))}
            placeholder="Tell us a bit about yourself"
            placeholderTextColor={secondaryColor}
            multiline
            maxLength={BIO_MAX_LENGTH}
          />
        </ProfileSection>

        <View style={styles.actions}>
          <Pressable
            onPress={handleSave}
            style={({ pressed }) => [
              styles.primaryButton,
              { backgroundColor: accentColor },
              pressed && styles.pressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Save"
          >
            <ThemedText style={styles.primaryButtonText}>Save</ThemedText>
          </Pressable>
          <Pressable
            onPress={() => router.back()}
            style={({ pressed }) => [
              styles.secondaryButton,
              pressed && styles.pressed,
            ]}
            accessibilityRole="button"
            accessibilityLabel="Cancel"
          >
            <ThemedText type="bodyPrimary" colorName="secondary">
              Cancel
            </ThemedText>
          </Pressable>
        </View>
      </ScrollView>
    </ThemedView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  avatarRow: {
    paddingVertical: Spacing.md,
  },
  avatarRowInner: {
    flexDirection: "row",
    alignItems: "center",
    gap: Spacing.md,
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
  input: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    minWidth: 100,
    textAlign: "right",
    padding: 0,
  },
  bioHeaderRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: Spacing.xs,
  },
  bioInput: {
    minHeight: 80,
    padding: Spacing.sm,
    fontSize: 16,
    lineHeight: 24,
    borderRadius: RADIUS_SMALL,
    borderWidth: StyleSheet.hairlineWidth,
  },
  actions: {
    marginHorizontal: Spacing.md,
    marginTop: Spacing.xs,
    gap: Spacing.sm,
  },
  primaryButton: {
    paddingVertical: Spacing.sm + 2,
    borderRadius: RADIUS_SMALL,
    alignItems: "center",
  },
  primaryButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  secondaryButton: {
    paddingVertical: Spacing.sm + 2,
    alignItems: "center",
  },
  pressed: {
    opacity: 0.7,
  },
});
