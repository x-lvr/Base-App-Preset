import React, { memo } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { profileListStyles } from '@/constants/profile-list';

import type { ProfileRowProps } from './types';

const ProfileRowComponent: React.FC<ProfileRowProps> = ({
  label,
  labelColorName = 'text',
  value,
  valueSecondary = true,
  showDisclosure = false,
  rightElement,
  hasBorder = true,
  borderColor,
  onPress,
  accessibilityLabel,
  accessibilityRole = 'button',
}) => {
  const content = (
    <>
      <ThemedText
        type="bodyPrimary"
        colorName={labelColorName}
        style={profileListStyles.rowLabel}
        numberOfLines={1}>
        {label}
      </ThemedText>
      {rightElement !== undefined ? (
        rightElement
      ) : value !== undefined ? (
        <ThemedText
          type={valueSecondary ? 'bodySecondary' : 'bodyPrimary'}
          colorName={valueSecondary ? 'secondary' : 'text'}
          style={valueSecondary ? profileListStyles.rowValueSecondary : profileListStyles.rowValue}
          numberOfLines={1}>
          {value}
        </ThemedText>
      ) : showDisclosure ? (
        <ThemedText type="bodyPrimary" colorName="secondary">
          ›
        </ThemedText>
      ) : null}
    </>
  );

  const rowStyle = [
    profileListStyles.row,
    hasBorder && profileListStyles.rowBorder,
    hasBorder && borderColor !== undefined && { borderBottomColor: borderColor },
  ];

  if (onPress !== undefined) {
    return (
      <Pressable
        style={({ pressed }) => [...rowStyle, pressed && styles.pressed]}
        onPress={onPress}
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityRole={accessibilityRole}>
        {content}
      </Pressable>
    );
  }

  return <View style={rowStyle}>{content}</View>;
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});

export const ProfileRow = memo(ProfileRowComponent);
