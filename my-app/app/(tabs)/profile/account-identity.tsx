import { ScrollView, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { profileListStyles } from '@/constants/profile-list';
import { defaultProfile } from '@/lib/profile-placeholder';

const rows = [
  { label: 'Email address', value: defaultProfile.email },
  { label: 'Phone number', value: defaultProfile.phone },
  { label: 'Region / country', value: defaultProfile.region },
  { label: 'Language', value: defaultProfile.language },
  { label: 'Time zone', value: defaultProfile.timeZone },
  { label: 'Account created', value: defaultProfile.accountCreatedAt, readOnly: true },
];

export default function AccountIdentityScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView
        style={profileListStyles.scroll}
        contentContainerStyle={profileListStyles.scrollContent}
        showsVerticalScrollIndicator={false}>
        <View style={profileListStyles.section}>
          <View style={profileListStyles.sectionHeader}>
            <ThemedText style={styles.sectionTitle}>Account & Identity</ThemedText>
          </View>
          <View style={profileListStyles.group}>
            {rows.map((item, index) => (
              <View
                key={item.label}
                style={[
                  profileListStyles.row,
                  index < rows.length - 1 && profileListStyles.rowBorder,
                ]}>
                <ThemedText style={profileListStyles.rowLabel}>{item.label}</ThemedText>
                <ThemedText
                  style={item.readOnly ? profileListStyles.rowValueMuted : profileListStyles.rowValue}
                  numberOfLines={1}>
                  {item.value}
                </ThemedText>
              </View>
            ))}
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
});
