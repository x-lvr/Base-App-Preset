import React, { useCallback, useState } from "react";
import { Alert, ScrollView, StyleSheet, Switch } from "react-native";

import { ProfileGroup, ProfileRow, ProfileSection } from "@/components/profile";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { profileListStyles } from "@/constants/profile-list";
import { useThemeColor } from "@/hooks/use-theme-color";
import { defaultSecurityPrivacy } from "@/lib/profile-placeholder";

const SecurityPrivacyScreen: React.FC = () => {
  const separatorColor = useThemeColor({}, "separator");
  const accentColor = useThemeColor({}, "accent");

  const [biometricEnabled, setBiometricEnabled] = useState(
    defaultSecurityPrivacy.biometricEnabled
  );
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(
    defaultSecurityPrivacy.twoFactorEnabled
  );
  const [profileVisibility, setProfileVisibility] = useState(
    defaultSecurityPrivacy.profileVisibility
  );
  const [activityVisibility, setActivityVisibility] = useState(
    defaultSecurityPrivacy.activityVisibility
  );

  const handleChangePassword = useCallback((): void => {
    Alert.alert("Change Password", "Placeholder: open change password flow.");
  }, []);

  const trackColor = { false: "#767577", true: accentColor };

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        style={[profileListStyles.scroll, { paddingTop: 40 }]}
        contentContainerStyle={profileListStyles.scrollContent}
        showsVerticalScrollIndicator={false}
        directionalLockEnabled={true}
        scrollEventThrottle={16}
      >
        <ProfileSection
          title="Security"
          titleIcon={
            <IconSymbol name={"lock" as any} size={24} color="#FF3B30" />
          }
        >
          <ProfileGroup>
            <ProfileRow
              label="Change password"
              showDisclosure
              leftIcon={<IconSymbol name="lock" size={24} color="#FF9500" />}
              hasBorder
              borderColor={separatorColor}
              onPress={handleChangePassword}
              accessibilityLabel="Change password"
            />
            <ProfileRow
              label="Biometric authentication"
              leftIcon={
                <IconSymbol name="fingerprint" size={24} color="#34C759" />
              }
              rightElement={
                <Switch
                  value={biometricEnabled}
                  onValueChange={setBiometricEnabled}
                  trackColor={trackColor}
                  thumbColor="#fff"
                />
              }
              hasBorder
              borderColor={separatorColor}
            />
            <ProfileRow
              label="Two-factor authentication"
              leftIcon={
                <IconSymbol name="verified" size={24} color="#007AFF" />
              }
              rightElement={
                <Switch
                  value={twoFactorEnabled}
                  onValueChange={setTwoFactorEnabled}
                  trackColor={trackColor}
                  thumbColor="#fff"
                />
              }
              hasBorder={false}
            />
          </ProfileGroup>
        </ProfileSection>

        <ProfileSection
          title="Privacy"
          titleIcon={
            <IconSymbol name={"fingerprint" as any} size={24} color="#34C759" />
          }
        >
          <ProfileGroup>
            <ProfileRow
              label="Profile visibility"
              rightElement={
                <Switch
                  value={profileVisibility}
                  onValueChange={setProfileVisibility}
                  trackColor={trackColor}
                  thumbColor="#fff"
                />
              }
              hasBorder
              borderColor={separatorColor}
            />
            <ProfileRow
              label="Activity visibility"
              rightElement={
                <Switch
                  value={activityVisibility}
                  onValueChange={setActivityVisibility}
                  trackColor={trackColor}
                  thumbColor="#fff"
                />
              }
              hasBorder={false}
            />
          </ProfileGroup>
        </ProfileSection>
      </ScrollView>
    </ThemedView>
  );
};

export default SecurityPrivacyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
