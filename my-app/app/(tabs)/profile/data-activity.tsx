import React, { useCallback, useMemo, useState } from 'react';
import { Alert, ScrollView, StyleSheet, View } from 'react-native';

import { ProfileGroup, ProfileRow, ProfileSection } from '@/components/profile';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { profileListStyles } from '@/constants/profile-list';
import { useThemeColor } from '@/hooks/use-theme-color';
import { defaultActivity } from '@/lib/profile-placeholder';

const DataActivityScreen: React.FC = () => {
  const separatorColor = useThemeColor({}, 'separator');
  const destructiveColor = useThemeColor({}, 'destructive');
  const [activity] = useState(defaultActivity);

  const handleDataExport = useCallback((): void => {
    Alert.alert('Data export', 'Placeholder: request a copy of your data.');
  }, []);

  const handleDeleteAccount = useCallback((): void => {
    Alert.alert(
      'Delete account',
      'This will permanently delete your account and all data. This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete account', style: 'destructive', onPress: () => {} },
      ]
    );
  }, []);

  const activityRows = useMemo(
    () => [
      { label: 'Last login', value: activity.lastLogin },
      { label: 'Activity summary', value: activity.activitySummary },
    ],
    [activity.lastLogin, activity.activitySummary]
  );

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        style={profileListStyles.scroll}
        contentContainerStyle={profileListStyles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <ProfileSection title="Activity">
          <ProfileGroup>
            {activityRows.map((row, index) => (
              <ProfileRow
                key={row.label}
                label={row.label}
                value={row.value}
                valueSecondary
                hasBorder={index < activityRows.length - 1}
                borderColor={separatorColor}
                accessibilityRole="none"
              />
            ))}
          </ProfileGroup>
        </ProfileSection>

        <ProfileSection title="Data">
          <ProfileGroup>
            <ProfileRow
              label="Export my data"
              showDisclosure
              hasBorder={false}
              onPress={handleDataExport}
              accessibilityLabel="Export my data"
            />
          </ProfileGroup>
        </ProfileSection>

        <ProfileSection>
          <View style={profileListStyles.sectionHeader}>
            <ThemedText type="sectionHeader" style={{ color: destructiveColor }}>
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
