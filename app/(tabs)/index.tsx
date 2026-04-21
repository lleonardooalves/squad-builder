import { PlayerCard } from "@/src/components/squad/PlayerCard";
import { useHome } from "@/src/hooks/screens/useHome";
import { colors } from "@/src/theme/colors";
import { radius } from "@/src/theme/radius";
import { spacing } from "@/src/theme/spacing";
import { typography } from "@/src/theme/typography";
import { MotiView } from "moti";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { players, handleAddPlayer, squad, totalPlayers, totalPriceSquad } =
    useHome();

  const [selectedPosition, setSelectedPosition] = useState("all");

  const filteredPlayers =
    selectedPosition === "all"
      ? players
      : players.filter((player) => player.position === selectedPosition);

  return (
    <MotiView
      from={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: "timing", duration: 250 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.eyebrow}>SQUAD BUILDER</Text>
            <Text style={styles.title}>Available Players</Text>
            <Text style={styles.subtitle}>
              Build your dream team with the best players available
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
                <Text style={styles.summaryValue}>€ {totalPriceSquad}M</Text>
                <Text style={styles.summaryLabel}>Total Value</Text>
              </View>
            </View>
          </View>

          <View style={styles.filterContainer}>
            <TouchableOpacity
              style={[
                styles.filterButton,
                selectedPosition === "all" && styles.filterButtonActive,
              ]}
              onPress={() => setSelectedPosition("all")}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  selectedPosition === "all" && styles.filterButtonTextActive,
                ]}
              >
                All
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.filterButton,
                selectedPosition === "GK" && styles.filterButtonActive,
              ]}
              onPress={() => setSelectedPosition("GK")}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  selectedPosition === "GK" && styles.filterButtonTextActive,
                ]}
              >
                GK
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.filterButton,
                selectedPosition === "DEF" && styles.filterButtonActive,
              ]}
              onPress={() => setSelectedPosition("DEF")}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  selectedPosition === "DEF" && styles.filterButtonTextActive,
                ]}
              >
                DEF
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.filterButton,
                selectedPosition === "MID" && styles.filterButtonActive,
              ]}
              onPress={() => setSelectedPosition("MID")}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  selectedPosition === "MID" && styles.filterButtonTextActive,
                ]}
              >
                MID
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.filterButton,
                selectedPosition === "FWD" && styles.filterButtonActive,
              ]}
              onPress={() => setSelectedPosition("FWD")}
            >
              <Text
                style={[
                  styles.filterButtonText,
                  selectedPosition === "FWD" && styles.filterButtonTextActive,
                ]}
              >
                FWD
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={filteredPlayers}
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
    </MotiView>
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

  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },

  filterButton: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.xl ?? 999,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
  },

  filterButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },

  filterButtonText: {
    ...typography.body,
    color: colors.textSecondary,
    fontWeight: "600",
  },

  filterButtonTextActive: {
    color: colors.background,
  },
});
