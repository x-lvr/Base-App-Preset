import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { ProfileGroup, ProfileRow, ProfileSection } from '@/components/profile';
import { ThemedView } from '@/components/themed-view';
import { profileListStyles } from '@/constants/profile-list';
import { useThemeColor } from '@/hooks/use-theme-color';
import { defaultProfile } from '@/lib/profile-placeholder';

interface AccountRow {
  label: string;
  value: string;
  readOnly?: boolean;
}

const ACCOUNT_ROWS: ReadonlyArray<AccountRow> = [
  { label: 'Email address', value: defaultProfile.email },
  { label: 'Phone number', value: defaultProfile.phone },
  { label: 'Region / country', value: defaultProfile.region },
  { label: 'Language', value: defaultProfile.language },
  { label: 'Time zone', value: defaultProfile.timeZone },
  { label: 'Account created', value: defaultProfile.accountCreatedAt, readOnly: true },
];

const AccountIdentityScreen: React.FC = () => {
  const separatorColor = useThemeColor({}, 'separator');

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        style={profileListStyles.scroll}
        contentContainerStyle={profileListStyles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <ProfileSection title="Account & Identity">
          <ProfileGroup>
            {ACCOUNT_ROWS.map((item, index) => (
              <ProfileRow
                key={item.label}
                label={item.label}
                value={item.value}
                valueSecondary={item.readOnly ?? false}
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
