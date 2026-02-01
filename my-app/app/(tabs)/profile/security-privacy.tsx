import { useState } from 'react';
import { Alert, Pressable, ScrollView, Switch, StyleSheet, View } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { profileListStyles } from '@/constants/profile-list';
import { defaultSecurityPrivacy } from '@/lib/profile-placeholder';

export default function SecurityPrivacyScreen() {
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

  const handleChangePassword = () => {
    Alert.alert('Change Password', 'Placeholder: open change password flow.');
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        style={profileListStyles.scroll}
        contentContainerStyle={profileListStyles.scrollContent}
        showsVerticalScrollIndicator={false}>
        {/* Security */}
        <View style={profileListStyles.section}>
          <View style={profileListStyles.sectionHeader}>
            <ThemedText style={styles.sectionTitle}>Security</ThemedText>
          </View>
          <View style={profileListStyles.group}>
            <Pressable
              style={[profileListStyles.row, profileListStyles.rowBorder]}
              onPress={handleChangePassword}>
              <ThemedText style={profileListStyles.rowLabel}>Change password</ThemedText>
              <ThemedText style={profileListStyles.rowValueMuted}>›</ThemedText>
            </Pressable>
            <View style={[profileListStyles.row, profileListStyles.rowBorder]}>
              <ThemedText style={profileListStyles.rowLabel}>Biometric authentication</ThemedText>
              <Switch
                value={biometricEnabled}
                onValueChange={setBiometricEnabled}
                trackColor={{ false: '#767577', true: '#0a7ea4' }}
                thumbColor="#fff"
              />
            </View>
            <View style={profileListStyles.row}>
              <ThemedText style={profileListStyles.rowLabel}>Two-factor authentication</ThemedText>
              <Switch
                value={twoFactorEnabled}
                onValueChange={setTwoFactorEnabled}
                trackColor={{ false: '#767577', true: '#0a7ea4' }}
                thumbColor="#fff"
              />
            </View>
          </View>
        </View>

        {/* Privacy */}
        <View style={profileListStyles.section}>
          <View style={profileListStyles.sectionHeader}>
            <ThemedText style={styles.sectionTitle}>Privacy</ThemedText>
          </View>
          <View style={profileListStyles.group}>
            <View style={[profileListStyles.row, profileListStyles.rowBorder]}>
              <ThemedText style={profileListStyles.rowLabel}>Profile visibility</ThemedText>
              <Switch
                value={profileVisibility}
                onValueChange={setProfileVisibility}
                trackColor={{ false: '#767577', true: '#0a7ea4' }}
                thumbColor="#fff"
              />
            </View>
            <View style={profileListStyles.row}>
              <ThemedText style={profileListStyles.rowLabel}>Activity visibility</ThemedText>
              <Switch
                value={activityVisibility}
                onValueChange={setActivityVisibility}
                trackColor={{ false: '#767577', true: '#0a7ea4' }}
                thumbColor="#fff"
              />
            </View>
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
