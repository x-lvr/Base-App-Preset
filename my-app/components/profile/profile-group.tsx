import React, { memo } from 'react';
import { View } from 'react-native';

import { profileListStyles } from '@/constants/profile-list';
import { useThemeColor } from '@/hooks/use-theme-color';

import type { ProfileGroupProps } from './types';

const ProfileGroupComponent: React.FC<ProfileGroupProps> = ({
  children,
  backgroundColor: backgroundColorProp,
}) => {
  const surfaceColor = useThemeColor({}, 'surface');
  const backgroundColor = backgroundColorProp ?? surfaceColor;

  return (
    <View style={[profileListStyles.group, { backgroundColor }]}>
      {children}
    </View>
  );
};

export const ProfileGroup = memo(ProfileGroupComponent);
