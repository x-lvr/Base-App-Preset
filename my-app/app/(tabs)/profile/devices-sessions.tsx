import React, { useCallback, useMemo, useState } from "react";
import { Alert, ScrollView, StyleSheet } from "react-native";

import { ProfileGroup, ProfileRow, ProfileSection } from "@/components/profile";
import { ThemedView } from "@/components/themed-view";
import { profileListStyles } from "@/constants/profile-list";
import { useThemeColor } from "@/hooks/use-theme-color";
import { defaultSessions, type SessionItem } from "@/lib/profile-placeholder";

interface SessionRowProps {
  item: SessionItem;
  isLast: boolean;
  separatorColor: string;
}

const SessionRow: React.FC<SessionRowProps> = ({
  item,
  isLast,
  separatorColor,
}) => (
  <ProfileRow
    label={`${item.deviceName}${item.isCurrent ? " (this device)" : ""}`}
    value={`${item.platform} · ${item.lastActive}`}
    valueSecondary
    hasBorder={!isLast}
    borderColor={separatorColor}
    accessibilityRole="none"
  />
);

const DevicesSessionsScreen: React.FC = () => {
  const separatorColor = useThemeColor({}, "separator");
  const [sessions] = useState(defaultSessions);

  const handleLogoutOtherDevices = useCallback((): void => {
    Alert.alert(
      "Log out from other devices",
      "You will stay logged in on this device. Other sessions will be signed out.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "Log out others", style: "destructive", onPress: () => {} },
      ]
    );
  }, []);

  const sessionRows = useMemo(
    () =>
      sessions.map((item, index) => ({
        item,
        isLast: index === sessions.length - 1,
      })),
    [sessions]
  );

  return (
    <ThemedView style={styles.container}>
      <ScrollView
        style={[profileListStyles.scroll, { paddingTop: 40 }]}
        contentContainerStyle={profileListStyles.scrollContent}
        showsVerticalScrollIndicator={false}
        directionalLockEnabled={true}
        scrollEventThrottle={16}
      >
        <ProfileSection title="Devices & Sessions">
          <ProfileGroup>
            {sessionRows.map(({ item, isLast }) => (
              <SessionRow
                key={item.id}
                item={item}
                isLast={isLast}
                separatorColor={separatorColor}
              />
            ))}
          </ProfileGroup>
        </ProfileSection>

        <ProfileSection>
          <ProfileGroup>
            <ProfileRow
              label="Log out from other devices"
              labelColorName="accent"
              onPress={handleLogoutOtherDevices}
              hasBorder={false}
              accessibilityLabel="Log out from other devices"
            />
          </ProfileGroup>
        </ProfileSection>
      </ScrollView>
    </ThemedView>
  );
};

export default DevicesSessionsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
