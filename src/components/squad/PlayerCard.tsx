import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme/colors";
import { radius } from "../../theme/radius";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";
import { Player } from "../../types/player";

type PlayerCardProps = {
  player: Player;
  onAdd?: (player: Player) => void;
  isAdded?: boolean;
};

export function PlayerCard({
  player,
  onAdd,
  isAdded = false,
}: PlayerCardProps) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: player.image }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{player.name}</Text>
        <Text style={styles.meta}>
          {player.team} • {player.position}
        </Text>
        <Text style={styles.meta}>Overall {player.rating}</Text>
        <Text style={styles.price}>€ {player.price}M</Text>
      </View>

      <TouchableOpacity
        style={[styles.button, isAdded && styles.buttonDisabled]}
        onPress={() => onAdd?.(player)}
        disabled={isAdded}
      >
        <Text style={styles.buttonText}>{isAdded ? "Added " : "Add"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: radius.md,
    marginRight: spacing.md,
  },
  info: {
    flex: 1,
  },
  name: {
    ...typography.subtitle,
    color: colors.text,
    marginBottom: spacing.xs,
  },
  meta: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.xs,
  },
  price: {
    ...typography.body,
    color: colors.primary,
    fontWeight: "700",
  },
  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.md,
  },
  buttonText: {
    ...typography.body,
    color: colors.text,
    fontWeight: "600",
  },
  buttonDisabled: {
    backgroundColor: colors.surfaceLight,
  },
});
