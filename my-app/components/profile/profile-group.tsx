import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

import { profileListStyles } from "@/constants/profile-list";
import { useThemeColor } from "@/hooks/use-theme-color";

import type { ProfileGroupProps } from "./types";

const ProfileGroupComponent: React.FC<ProfileGroupProps> = ({
  children,
  backgroundColor: backgroundColorProp,
}) => {
  const surfaceColor = useThemeColor({}, "surface");
  const backgroundColor = backgroundColorProp ?? surfaceColor;

  return (
    <View style={[profileListStyles.group, styles.card, { backgroundColor }]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // iOS Settings-style: subtle border for card definition
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "rgba(0, 0, 0, 0.08)",
  },
});

export const ProfileGroup = memo(ProfileGroupComponent);
