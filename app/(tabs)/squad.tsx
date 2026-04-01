import { PlayerCard } from "@/src/components/squad/PlayerCard";
import { useSquadStore } from "@/src/store/squadStore";
import { colors } from "@/src/theme/colors";
import { radius } from "@/src/theme/radius";
import { spacing } from "@/src/theme/spacing";
import { typography } from "@/src/theme/typography";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SquadScreen() {
  const squad = useSquadStore((state) => state.squad);
  const removePlayer = useSquadStore((state) => state.removePlayer);

  const totalPlayers = squad.length;
  const totalValue = squad.reduce((sum, player) => sum + player.price, 0);

  const isEmpty = totalPlayers === 0;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>SQUAD BUILDER</Text>

          <View style={styles.titleRow}>
            <Text style={styles.title}>My Squad</Text>

            <TouchableOpacity
              style={styles.homeButton}
              onPress={() => router.navigate("/")}
              activeOpacity={0.8}
            >
              <Ionicons name="home" size={18} color={colors.text} />
            </TouchableOpacity>
          </View>

          <Text style={styles.subtitle}>
            Manage your selected players and build a balanced team
          </Text>
        </View>

        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>Squad Summary</Text>

          <View style={styles.summaryRow}>
            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>{totalPlayers}</Text>
              <Text style={styles.summaryLabel}>Players</Text>
            </View>

            <View style={styles.summaryDivider} />

            <View style={styles.summaryItem}>
              <Text style={styles.summaryValue}>€ {totalValue}M</Text>
              <Text style={styles.summaryLabel}>Total Value</Text>
            </View>
          </View>
        </View>

        {isEmpty ? (
          <View style={styles.emptyCard}>
            <View style={styles.emptyIconWrapper}>
              <Text style={styles.emptyIcon}>⚽</Text>
            </View>

            <Text style={styles.emptyTitle}>Your squad is empty</Text>
            <Text style={styles.emptyDescription}>
              Go to the Home tab and add players to start building your dream
              team.
            </Text>
          </View>
        ) : (
          <FlatList
            data={squad}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <PlayerCard player={item} onRemove={removePlayer} />
            )}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}
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
    backgroundColor: colors.background,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
  },

  header: {
    marginBottom: spacing.lg,
  },

  eyebrow: {
    ...typography.body,
    color: colors.primary,
    marginBottom: spacing.xs,
    fontWeight: "700",
    letterSpacing: 1,
  },

  title: {
    ...typography.title,
    color: colors.text,
    marginBottom: spacing.xs,
    fontWeight: "700",
  },

  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 20,
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
    marginBottom: spacing.md,
  },

  summaryRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  summaryItem: {
    flex: 1,
    alignItems: "center",
  },

  summaryValue: {
    ...typography.title,
    color: colors.text,
    fontWeight: "700",
    marginBottom: 4,
  },

  summaryLabel: {
    ...typography.body,
    color: colors.textSecondary,
  },

  summaryDivider: {
    width: 1,
    height: 40,
    backgroundColor: colors.border,
  },

  emptyCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.xl,
    alignItems: "center",
    justifyContent: "center",
    marginTop: spacing.md,
  },

  emptyIconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.surfaceLight,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: spacing.md,
  },

  emptyIcon: {
    fontSize: 28,
  },

  emptyTitle: {
    ...typography.subtitle,
    color: colors.text,
    marginBottom: spacing.sm,
    fontWeight: "700",
  },

  emptyDescription: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: "center",
    lineHeight: 20,
  },

  listContent: {
    paddingBottom: spacing.xl,
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  homeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
});
