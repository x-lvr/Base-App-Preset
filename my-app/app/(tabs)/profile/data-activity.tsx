import React, { useCallback, useMemo, useState } from "react";
import { Alert, ScrollView, StyleSheet, View } from "react-native";

import { ProfileGroup, ProfileRow, ProfileSection } from "@/components/profile";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { profileListStyles } from "@/constants/profile-list";
import { useThemeColor } from "@/hooks/use-theme-color";
import { defaultActivity } from "@/lib/profile-placeholder";

const DataActivityScreen: React.FC = () => {
  const separatorColor = useThemeColor({}, "separator");
  const destructiveColor = useThemeColor({}, "destructive");
  const [activity] = useState(defaultActivity);

  const handleDataExport = useCallback((): void => {
    Alert.alert("Data export", "Placeholder: request a copy of your data.");
  }, []);

  const handleDeleteAccount = useCallback((): void => {
    Alert.alert(
      "Delete account",
      "This will permanently delete your account and all data. This action cannot be undone.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Delete account", style: "destructive", onPress: () => {} },
      ]
    );
  }, []);

  const activityRows = useMemo(
    () => [
      {
        label: "Last login",
        value: activity.lastLogin,
        icon: "login",
        iconColor: "#007AFF",
      },
      {
        label: "Activity summary",
        value: activity.activitySummary,
        icon: "assignment",
        iconColor: "#34C759",
      },
    ],
    [activity.lastLogin, activity.activitySummary]
  );

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
          title="Activity"
          titleIcon={
            <IconSymbol name={"assignment" as any} size={24} color="#AF52DE" />
          }
        >
          <ProfileGroup>
            {activityRows.map((row, index) => (
              <ProfileRow
                key={row.label}
                label={row.label}
                value={row.value}
                valueSecondary
                leftIcon={
                  <IconSymbol
                    name={row.icon as any}
                    size={24}
                    color={row.iconColor}
                  />
                }
                hasBorder={index < activityRows.length - 1}
                borderColor={separatorColor}
                accessibilityRole="none"
              />
            ))}
          </ProfileGroup>
        </ProfileSection>

        <ProfileSection
          title="Data"
          titleIcon={
            <IconSymbol name={"download" as any} size={24} color="#FF9500" />
          }
        >
          <ProfileGroup>
            <ProfileRow
              label="Export my data"
              showDisclosure
              leftIcon={
                <IconSymbol
                  name={"download" as any}
                  size={24}
                  color="#5AC8FA"
                />
              }
              hasBorder={false}
              onPress={handleDataExport}
              accessibilityLabel="Export my data"
            />
          </ProfileGroup>
        </ProfileSection>

        <ProfileSection>
          <View style={profileListStyles.sectionHeader}>
            <ThemedText
              type="sectionHeader"
              style={{ color: destructiveColor }}
            >
              Danger zone
            </ThemedText>
          </View>
          <ProfileGroup>
            <ProfileRow
              label="Delete account"
              labelColorName="destructive"
              onPress={handleDeleteAccount}
              hasBorder={false}
              accessibilityLabel="Delete account"
            />
          </ProfileGroup>
        </ProfileSection>
      </ScrollView>
    </ThemedView>
  );
};

export default DataActivityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
