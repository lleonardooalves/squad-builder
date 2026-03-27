import { PlayerCard } from "@/src/components/squad/PlayerCard";
import { useHome } from "@/src/hooks/screens/useHome";
import { colors } from "@/src/theme/colors";
import { spacing } from "@/src/theme/spacing";
import { typography } from "@/src/theme/typography";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SquadScreen() {
  const { squad } = useHome();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>My Squad</Text>
        {squad.length === 0 ? (
          <Text style={styles.emptyText}>No players selected</Text>
        ) : (
          <FlatList
            data={squad}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <PlayerCard player={item} isAdded />}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    padding: spacing.md,
  },
  title: {
    ...typography.title,
    color: colors.text,
    marginBottom: spacing.md,
  },
  emptyText: {
    ...typography.body,
    color: colors.textSecondary,
  },
  listContent: {
    paddingBottom: spacing.lg,
  },
});
