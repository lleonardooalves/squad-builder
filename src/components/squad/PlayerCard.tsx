import { router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../../theme/colors";
import { radius } from "../../theme/radius";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";
import { Player } from "../../types/player";

type PlayerCardProps = {
  player: Player;
  onAdd?: (player: Player) => void;
  onRemove?: (id: string) => void;
  isAdded?: boolean;
};

export function PlayerCard({
  player,
  onAdd,
  onRemove,
  isAdded = false,
}: PlayerCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        router.push({
          pathname: "/player/[id]",
          params: { id: player.id },
        })
      }
      activeOpacity={0.8}
    >
      {imageError ? (
        <View style={styles.imagePlaceholder}>
          <Text>👤</Text>
        </View>
      ) : (
        <Image
          source={{ uri: player.image }}
          style={styles.image}
          onError={() => setImageError(true)}
        />
      )}
      <View style={styles.content}>
        <View style={styles.topRow}>
          <View style={styles.info}>
            <Text style={styles.name} numberOfLines={1}>
              {player.name}
            </Text>

            <Text style={styles.team} numberOfLines={1}>
              {player.team}
            </Text>

            <Text style={styles.meta}>{player.position}</Text>
          </View>

          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>{player.rating}</Text>
          </View>
        </View>

        <View style={styles.bottomRow}>
          <Text style={styles.price}>€ {player.price}M</Text>

          <View style={styles.actions}>
            {onAdd && (
              <TouchableOpacity
                style={[styles.button, isAdded && styles.buttonDisabled]}
                onPress={() => onAdd(player)}
                disabled={isAdded}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>
                  {isAdded ? "Added" : "Add"}
                </Text>
              </TouchableOpacity>
            )}

            {onRemove && (
              <TouchableOpacity
                style={[styles.button, styles.buttonRemove]}
                onPress={() => onRemove(player.id)}
                activeOpacity={0.8}
              >
                <Text style={styles.buttonText}>Remove</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },

  image: {
    width: 78,
    height: 78,
    borderRadius: radius.md,
    marginRight: spacing.md,
  },

  content: {
    flex: 1,
    justifyContent: "space-between",
  },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: spacing.md,
  },

  info: {
    flex: 1,
    paddingRight: spacing.sm,
  },

  name: {
    ...typography.subtitle,
    color: colors.text,
    marginBottom: 4,
    fontWeight: "700",
  },

  team: {
    ...typography.body,
    color: colors.text,
    marginBottom: 2,
  },

  meta: {
    ...typography.body,
    color: colors.textSecondary,
  },

  ratingBadge: {
    minWidth: 42,
    height: 42,
    borderRadius: 999,
    backgroundColor: colors.warning,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.sm,
  },

  ratingText: {
    ...typography.body,
    color: colors.text,
    fontWeight: "700",
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: spacing.sm,
  },

  price: {
    ...typography.body,
    color: colors.primary,
    fontWeight: "700",
    fontSize: 16,
  },

  actions: {
    flexDirection: "row",
    gap: spacing.sm,
  },

  button: {
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.md,
    minWidth: 72,
    alignItems: "center",
  },

  buttonText: {
    ...typography.body,
    color: colors.text,
    fontWeight: "600",
  },

  buttonDisabled: {
    backgroundColor: colors.surfaceLight,
  },

  buttonRemove: {
    backgroundColor: colors.error,
  },
  imagePlaceholder: {
    width: 78,
    height: 78,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
});
