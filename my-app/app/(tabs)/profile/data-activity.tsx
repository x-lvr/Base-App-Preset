import { useState } from 'react';
import { Alert, Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { profileListStyles } from '@/constants/profile-list';
import { defaultActivity } from '@/lib/profile-placeholder';

export default function DataActivityScreen() {
  const [activity] = useState(defaultActivity);

  const handleDataExport = () => {
    Alert.alert('Data export', 'Placeholder: request a copy of your data.');
  };

  const handleDeleteAccount = () => {
    Alert.alert(
      'Delete account',
      'This will permanently delete your account and all data. This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete account', style: 'destructive', onPress: () => {} },
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
            <ThemedText style={styles.sectionTitle}>Activity</ThemedText>
          </View>
          <View style={profileListStyles.group}>
            <View style={[profileListStyles.row, profileListStyles.rowBorder]}>
              <ThemedText style={profileListStyles.rowLabel}>Last login</ThemedText>
              <ThemedText style={profileListStyles.rowValueMuted}>{activity.lastLogin}</ThemedText>
            </View>
            <View style={profileListStyles.row}>
              <ThemedText style={profileListStyles.rowLabel}>Activity summary</ThemedText>
              <ThemedText style={profileListStyles.rowValueMuted}>
                {activity.activitySummary}
              </ThemedText>
            </View>
          </View>
        </View>

        <View style={profileListStyles.section}>
          <View style={profileListStyles.sectionHeader}>
            <ThemedText style={styles.sectionTitle}>Data</ThemedText>
          </View>
          <View style={profileListStyles.group}>
            <Pressable
              onPress={handleDataExport}
              style={({ pressed }) => [
                profileListStyles.row,
                pressed && styles.pressed,
              ]}>
              <ThemedText style={profileListStyles.rowLabel}>Export my data</ThemedText>
              <ThemedText style={profileListStyles.rowValueMuted}>›</ThemedText>
            </Pressable>
          </View>
        </View>

        <View style={profileListStyles.section}>
          <View style={profileListStyles.sectionHeader}>
            <ThemedText style={[styles.sectionTitle, styles.dangerTitle]}>Danger zone</ThemedText>
          </View>
          <View style={profileListStyles.dangerZone}>
            <Pressable
              onPress={handleDeleteAccount}
              style={({ pressed }) => [
                profileListStyles.dangerRow,
                pressed && styles.pressed,
              ]}>
              <ThemedText style={styles.dangerText}>Delete account</ThemedText>
            </Pressable>
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
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    opacity: 0.7,
    textTransform: 'uppercase',
  },
  dangerTitle: {
    color: '#dc3545',
    opacity: 1,
  },
  dangerText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#dc3545',
  },
  pressed: {
    opacity: 0.7,
  },
});
