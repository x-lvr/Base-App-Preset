import { StyleSheet, View } from "react-native";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { useThemeColor } from "@/hooks/use-theme-color";

export default function DashboardScreen() {
  const backgroundColor = useThemeColor({}, "background");
  return (
    <ThemedView style={[styles.container, { paddingTop: 40, backgroundColor }]}>
      <View style={styles.content}>
        <ThemedText type="title">Dashboard</ThemedText>
        <ThemedText>Your dashboard content goes here.</ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
});
