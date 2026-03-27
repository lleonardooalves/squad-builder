import { PlayerCard } from "@/src/components/squad/PlayerCard";
import { useHome } from "@/src/hooks/screens/useHome";
import { colors } from "@/src/theme/colors";
import { radius } from "@/src/theme/radius";
import { spacing } from "@/src/theme/spacing";
import { typography } from "@/src/theme/typography";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { players, handleAddPlayer, squad, totalPlayers, totalPriceSquad } =
    useHome();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Available Players</Text>
        <Text style={styles.subtitle}>Build your squad</Text>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Squad Summary</Text>
          <Text style={styles.summaryText}>Total Players: {totalPlayers}</Text>
          <Text style={styles.summaryText}>
            Total Squad Value: € {totalPriceSquad}M
          </Text>
        </View>

        <FlatList
          data={players}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            const isAdded = squad.some((player) => player.id === item.id);
            return (
              <PlayerCard
                player={item}
                onAdd={handleAddPlayer}
                isAdded={isAdded}
              />
            );
          }}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
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
    backgroundColor: colors.background,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
  },
  title: {
    ...typography.title,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  summaryCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.md,
    marginBottom: spacing.lg,
  },
  summaryTitle: {
    ...typography.subtitle,
    color: colors.text,
    marginBottom: spacing.sm,
  },
  summaryText: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  listContent: {
    paddingBottom: spacing.xl,
  },
});
