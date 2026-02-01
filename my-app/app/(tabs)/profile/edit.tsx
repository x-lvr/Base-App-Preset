import { router } from 'expo-router';
import { Image } from 'expo-image';
import { useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  Alert,
} from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { profileListStyles } from '@/constants/profile-list';
import { useThemeColor } from '@/hooks/use-theme-color';
import { defaultProfile } from '@/lib/profile-placeholder';

const BIO_MAX_LENGTH = 120;
const AVATAR_SIZE = 80;

export default function EditProfileScreen() {
  const textColor = useThemeColor({}, 'text');
  const [firstName, setFirstName] = useState(defaultProfile.firstName);
  const [lastName, setLastName] = useState(defaultProfile.lastName);
  const [username, setUsername] = useState(defaultProfile.username);
  const [bio, setBio] = useState(defaultProfile.bio);
  const [avatarUri] = useState(defaultProfile.avatarUri);

  const handleSave = () => {
    // Placeholder: persist via API/context
    Alert.alert('Saved', 'Profile updated.', [{ text: 'OK', onPress: () => router.back() }]);
  };

  const handleCancel = () => router.back();

  const handleChangePhoto = () => {
    Alert.alert('Change Photo', 'Choose photo or remove?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Choose Photo', onPress: () => {} },
      { text: 'Remove Photo', style: 'destructive', onPress: () => {} },
    ]);
  };

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        style={profileListStyles.scroll}
        contentContainerStyle={profileListStyles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        {/* Avatar */}
        <View style={styles.section}>
          <Pressable
            onPress={handleChangePhoto}
            style={({ pressed }) => [styles.avatarRow, pressed && styles.pressed]}>
            {avatarUri ? (
              <Image source={{ uri: avatarUri }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <ThemedText type="title" style={styles.avatarInitials}>
                  {firstName?.[0] ?? ''}{lastName?.[0] ?? ''}
                </ThemedText>
              </View>
            )}
            <ThemedText style={styles.changePhotoLabel}>Change photo</ThemedText>
          </Pressable>
        </View>

        {/* Fields */}
        <View style={profileListStyles.section}>
          <View style={profileListStyles.group}>
            <View style={[profileListStyles.row, profileListStyles.rowBorder]}>
              <ThemedText style={profileListStyles.rowLabel}>First name</ThemedText>
              <TextInput
                style={[styles.input, { color: textColor }]}
                value={firstName}
                onChangeText={setFirstName}
                placeholder="First name"
                placeholderTextColor="rgba(128,128,128,0.8)"
                autoCapitalize="words"
              />
            </View>
            <View style={[profileListStyles.row, profileListStyles.rowBorder]}>
              <ThemedText style={profileListStyles.rowLabel}>Last name</ThemedText>
              <TextInput
                style={[styles.input, { color: textColor }]}
                value={lastName}
                onChangeText={setLastName}
                placeholder="Last name"
                placeholderTextColor="rgba(128,128,128,0.8)"
                autoCapitalize="words"
              />
            </View>
            <View style={profileListStyles.row}>
              <ThemedText style={profileListStyles.rowLabel}>Username</ThemedText>
              <TextInput
                style={[styles.input, { color: textColor }]}
                value={username}
                onChangeText={setUsername}
                placeholder="@username"
                placeholderTextColor="rgba(128,128,128,0.8)"
                autoCapitalize="none"
              />
            </View>
          </View>
        </View>

        {/* Bio */}
        <View style={profileListStyles.section}>
          <View style={styles.bioHeaderRow}>
            <ThemedText style={styles.sectionTitle}>Short bio</ThemedText>
            <ThemedText style={styles.charCount}>
              {bio.length}/{BIO_MAX_LENGTH}
            </ThemedText>
          </View>
          <TextInput
            style={[styles.bioInput, { color: textColor }]}
            value={bio}
            onChangeText={(t) => setBio(t.slice(0, BIO_MAX_LENGTH))}
            placeholder="Tell us a bit about yourself"
            placeholderTextColor="rgba(128,128,128,0.8)"
            multiline
            maxLength={BIO_MAX_LENGTH}
          />
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <Pressable
            onPress={handleSave}
            style={({ pressed }) => [styles.primaryButton, pressed && styles.pressed]}>
            <ThemedText style={styles.primaryButtonText}>Save</ThemedText>
          </Pressable>
          <Pressable
            onPress={handleCancel}
            style={({ pressed }) => [styles.secondaryButton, pressed && styles.pressed]}>
            <ThemedText style={styles.secondaryButtonText}>Cancel</ThemedText>
          </Pressable>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    marginHorizontal: 16,
    marginBottom: 24,
  },
  bioHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  avatarRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    gap: 16,
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
    backgroundColor: 'rgba(128,128,128,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarInitials: {
    fontSize: 24,
    color: '#fff',
  },
  changePhotoLabel: {
    fontSize: 16,
    opacity: 0.8,
  },
  input: {
    flex: 1,
    fontSize: 16,
    minWidth: 100,
    textAlign: 'right',
    padding: 0,
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: '600',
    opacity: 0.7,
    textTransform: 'uppercase',
  },
  charCount: {
    fontSize: 13,
    opacity: 0.6,
  },
  bioInput: {
    minHeight: 80,
    padding: 12,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(128,128,128,0.3)',
  },
  actions: {
    marginHorizontal: 16,
    marginTop: 8,
    gap: 12,
  },
  primaryButton: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#0a7ea4',
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  secondaryButton: {
    paddingVertical: 14,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 16,
    opacity: 0.8,
  },
  pressed: {
    opacity: 0.7,
  },
});
