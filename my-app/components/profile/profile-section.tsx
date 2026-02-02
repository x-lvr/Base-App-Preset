import React, { memo } from "react";
import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { profileListStyles } from "@/constants/profile-list";

import type { ProfileSectionProps } from "./types";

const ProfileSectionComponent: React.FC<ProfileSectionProps> = ({
  title,
  titleIcon,
  children,
}) => {
  return (
    <View style={profileListStyles.section}>
      {title ? (
        <View
          style={[
            profileListStyles.sectionHeader,
            styles.sectionHeaderWithIcon,
          ]}
        >
          {titleIcon && <View style={styles.sectionIcon}>{titleIcon}</View>}
          <ThemedText type="sectionHeader" colorName="secondary">
            {title}
          </ThemedText>
        </View>
      ) : null}
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  sectionHeaderWithIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  sectionIcon: {
    marginRight: 12,
  },
});

export const ProfileSection = memo(ProfileSectionComponent);
