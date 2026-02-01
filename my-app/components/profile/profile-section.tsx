import React, { memo } from 'react';
import { View, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { profileListStyles } from '@/constants/profile-list';
import { useThemeColor } from '@/hooks/use-theme-color';

import type { ProfileSectionProps } from './types';

const ProfileSectionComponent: React.FC<ProfileSectionProps> = ({ title, children }) => {
  return (
    <View style={profileListStyles.section}>
      {title ? (
        <View style={profileListStyles.sectionHeader}>
          <ThemedText type="sectionHeader" colorName="secondary">
            {title}
          </ThemedText>
        </View>
      ) : null}
      {children}
    </View>
  );
};

export const ProfileSection = memo(ProfileSectionComponent);
