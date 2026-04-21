import { colors } from "@/src/theme/colors";
import { radius } from "@/src/theme/radius";
import { spacing } from "@/src/theme/spacing";
import { typography } from "@/src/theme/typography";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type PlayersFilterProps = {
  selectedPosition: string;
  onSelectedPosition: (position: string) => void;
};

export default function PlayersFilter({
  selectedPosition,
  onSelectedPosition,
}: PlayersFilterProps) {
  return (
    <View style={styles.filterContainer}>
      <TouchableOpacity
        style={[
          styles.filterButton,
          selectedPosition === "all" && styles.filterButtonActive,
        ]}
        onPress={() => onSelectedPosition("all")}
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
        onPress={() => onSelectedPosition("GK")}
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
        onPress={() => onSelectedPosition("DEF")}
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
        onPress={() => onSelectedPosition("MID")}
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
        onPress={() => onSelectedPosition("FWD")}
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
  );
}

const styles = StyleSheet.create({
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
