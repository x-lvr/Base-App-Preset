import React, { memo } from "react";
import { Pressable, StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { PAGE_HORIZONTAL } from "@/constants/design-system";
import { profileListStyles } from "@/constants/profile-list";

import type { ProfileRowProps } from "./types";

const ProfileRowComponent: React.FC<ProfileRowProps> = ({
  label,
  labelColorName = "text",
  value,
  valueSecondary = true,
  showDisclosure = false,
  rightElement,
  leftIcon,
  hasBorder = true,
  borderColor,
  onPress,
  accessibilityLabel,
  accessibilityRole = "button",
}) => {
  const content = (
    <>
      {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}
      <ThemedText
        type="bodyPrimary"
        colorName={labelColorName}
        style={[profileListStyles.rowLabel, leftIcon && styles.labelWithIcon]}
        numberOfLines={1}
      >
        {label}
      </ThemedText>
      {rightElement !== undefined ? (
        rightElement
      ) : value !== undefined ? (
        <ThemedText
          type={valueSecondary ? "bodySecondary" : "bodyPrimary"}
          colorName={valueSecondary ? "secondary" : "text"}
          style={
            valueSecondary
              ? profileListStyles.rowValueSecondary
              : profileListStyles.rowValue
          }
          numberOfLines={1}
        >
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
    styles.rowInset,
    hasBorder && styles.rowWithBorder,
    hasBorder &&
      borderColor !== undefined && { borderBottomColor: borderColor },
  ];

  if (onPress !== undefined) {
    return (
      <Pressable
        style={({ pressed }) => [...rowStyle, pressed && styles.pressed]}
        onPress={onPress}
        accessibilityLabel={accessibilityLabel ?? label}
        accessibilityRole={accessibilityRole}
      >
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
  iconContainer: {
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
    width: 28,
    height: 28,
  },
  labelWithIcon: {
    flex: 1,
  },
  rowInset: {
    marginLeft: PAGE_HORIZONTAL,
    marginRight: PAGE_HORIZONTAL,
    paddingLeft: PAGE_HORIZONTAL,
    paddingRight: PAGE_HORIZONTAL,
    marginHorizontal: 0,
  },
  rowWithBorder: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "rgba(0, 0, 0, 0.08)",
  },
});

export const ProfileRow = memo(ProfileRowComponent);
