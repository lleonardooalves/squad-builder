import { mockPlayers } from "@/src/data/mockPlayers";
import { colors } from "@/src/theme/colors";
import { radius } from "@/src/theme/radius";
import { spacing } from "@/src/theme/spacing";
import { typography } from "@/src/theme/typography";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PlayerScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const player = mockPlayers.find((item) => item.id === id);

  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    setImageError(false);
  }, [id]);

  if (!player) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.title}>Player not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>SQUAD BUILDER</Text>

          <View style={styles.titleRow}>
            <TouchableOpacity
              style={styles.homeButton}
              onPress={() => router.navigate("/")}
              activeOpacity={0.8}
            >
              <Ionicons name="home" size={18} color={colors.text} />
            </TouchableOpacity>
          </View>
          <View style={styles.card}>
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
            <Text style={styles.name}>{player.name}</Text>
            <Text style={styles.team}>{player.team}</Text>
            <Text style={styles.meta}>{player.position}</Text>
            <View style={styles.ratingBadge}>
              <Text style={styles.ratingText}>{player.rating}</Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  title: {
    ...typography.title,
    color: colors.text,
    marginBottom: spacing.xs,
    fontWeight: "700",
    marginTop: spacing.md,
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
  imagePlaceholder: {
    width: 78,
    height: 78,
    borderRadius: radius.md,
    backgroundColor: colors.surfaceLight,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing.md,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: radius.md,
    marginRight: spacing.md,
  },
  imageContainer: {
    marginTop: spacing.lg,
    alignItems: "center",
    justifyContent: "center",
  },
  card: {
    marginTop: spacing.lg,
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: spacing.md,
  },
  ratingBadge: {
    minWidth: 72,
    height: 72,
    borderRadius: 999,
    backgroundColor: colors.warning,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: spacing.sm,
  },

  ratingText: {
    ...typography.title,
    color: colors.text,
    fontWeight: "700",
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

  content: {
    flex: 1,
    justifyContent: "space-between",
  },
});
