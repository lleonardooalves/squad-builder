import { mockPlayers } from '@/src/data/mockPlayers';
import { colors } from '@/src/theme/colors';
import { radius } from '@/src/theme/radius';
import { spacing } from '@/src/theme/spacing';
import { typography } from '@/src/theme/typography';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
          <Text style={styles.name}>Player not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.eyebrow}>SQUAD BUILDER</Text>

          <TouchableOpacity
            style={styles.homeButton}
            onPress={() => router.navigate('/')}
            activeOpacity={0.8}
          >
            <Ionicons name="home" size={18} color={colors.text} />
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          {imageError ? (
            <View style={styles.imagePlaceholder}>
              <Text style={styles.placeholderText}>👤</Text>
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

          <View style={styles.infoRow}>
            <View style={styles.infoBadge}>
              <Text style={styles.infoLabel}>Position</Text>
              <Text style={styles.infoValue}>{player.position}</Text>
            </View>

            <View style={styles.infoBadge}>
              <Text style={styles.infoLabel}>Value</Text>
              <Text style={styles.infoValue}>€ {player.price}M</Text>
            </View>
          </View>

          <View style={styles.ratingBadge}>
            <Text style={styles.ratingText}>{player.rating}</Text>
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

  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  eyebrow: {
    ...typography.body,
    color: colors.primary,
    fontWeight: '700',
    letterSpacing: 1,
  },

  homeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },

  card: {
    marginTop: spacing.md,
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
  },

  image: {
    width: 220,
    height: 220,
    borderRadius: radius.lg,
    marginBottom: spacing.lg,
  },

  imagePlaceholder: {
    width: 220,
    height: 220,
    borderRadius: radius.lg,
    backgroundColor: colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },

  placeholderText: {
    fontSize: 40,
  },

  name: {
    ...typography.title,
    color: colors.text,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: spacing.sm,
  },

  team: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
    textAlign: 'center',
  },

  infoRow: {
    flexDirection: 'row',
    width: '100%',
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },

  infoBadge: {
    flex: 1,
    backgroundColor: colors.background,
    borderRadius: radius.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },

  infoLabel: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: 2,
    fontSize: 12,
    opacity: 0.8,
  },

  infoValue: {
    ...typography.body,
    color: colors.text,
    fontWeight: '700',
  },

  ratingBadge: {
    minWidth: 80,
    height: 80,
    borderRadius: 999,
    backgroundColor: colors.warning,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.sm,
  },

  ratingText: {
    ...typography.title,
    color: colors.text,
    fontWeight: '700',
  },
});
