import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import { ProfileGroup, ProfileRow, ProfileSection } from "@/components/profile";
import { ThemedView } from "@/components/themed-view";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { profileListStyles } from "@/constants/profile-list";
import { useThemeColor } from "@/hooks/use-theme-color";
import { defaultProfile } from "@/lib/profile-placeholder";

interface AccountRow {
  label: string;
  value: string;
  readOnly?: boolean;
  icon?: any;
  iconColor?: string;
}

const ACCOUNT_ROWS: ReadonlyArray<AccountRow> = [
  {
    label: "Email address",
    value: defaultProfile.email,
    icon: "mail",
    iconColor: "#007AFF",
  },
  {
    label: "Phone number",
    value: defaultProfile.phone,
    icon: "phone",
    iconColor: "#34C759",
  },
  {
    label: "Region / country",
    value: defaultProfile.region,
    icon: "public",
    iconColor: "#FF9500",
  },
  {
    label: "Language",
    value: defaultProfile.language,
    icon: "language",
    iconColor: "#5AC8FA",
  },
  {
    label: "Time zone",
    value: defaultProfile.timeZone,
    icon: "schedule",
    iconColor: "#AF52DE",
  },
  {
    label: "Account created",
    value: defaultProfile.accountCreatedAt,
    readOnly: true,
    icon: "today",
    iconColor: "#FF3B30",
  },
];

const AccountIdentityScreen: React.FC = () => {
  const separatorColor = useThemeColor({}, "separator");

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
          title="Account & Identity"
          titleIcon={
            <IconSymbol name={"person" as any} size={24} color="#FF9500" />
          }
        >
          <ProfileGroup>
            {ACCOUNT_ROWS.map((item, index) => (
              <ProfileRow
                key={item.label}
                label={item.label}
                value={item.value}
                valueSecondary={item.readOnly ?? false}
                leftIcon={
                  <IconSymbol
                    name={item.icon as any}
                    size={24}
                    color={item.iconColor ?? "#007AFF"}
                  />
                }
                hasBorder={index < ACCOUNT_ROWS.length - 1}
                borderColor={separatorColor}
                accessibilityLabel={`${item.label}: ${item.value}`}
                accessibilityRole="none"
              />
            ))}
          </ProfileGroup>
        </ProfileSection>
      </ScrollView>
    </ThemedView>
  );
};

export default AccountIdentityScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
