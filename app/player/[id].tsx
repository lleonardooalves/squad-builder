import { mockPlayers } from '@/src/data/mockPlayers';
import { colors } from '@/src/theme/colors';
import { radius } from '@/src/theme/radius';
import { spacing } from '@/src/theme/spacing';
import { typography } from '@/src/theme/typography';
import { getOverallStyle } from '@/src/utils/getOverallStyle';
import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PlayerScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const player = mockPlayers.find((item) => item.id === id);

  const [imageError, setImageError] = useState(false);

  const overallStyle = getOverallStyle(player?.id ? player.rating : 0);

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
          <View style={styles.topRow}>
            <View style={styles.rarityBadge}>
              <Ionicons name="sparkles" size={14} color={colors.warning} />
              <Text style={styles.rarityText}>Rare Player</Text>
            </View>

            <View style={styles.trendBadge}>
              <Ionicons name="trending-up" size={15} color="#2ECC71" />
              <Text style={styles.trendText}>+2</Text>
            </View>
          </View>

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
          <Text style={styles.meta}>
            {player.team} • {player.position}
          </Text>

          <View style={styles.infoRow}>
            <View style={styles.statusPill}>
              <Ionicons name="flame" size={16} color={colors.warning} />
              <Text style={styles.statusText}>In Form</Text>
            </View>

            <Text style={styles.price}>€ {player.price}M</Text>
          </View>

          <View style={styles.attributesBox}>
            <Text style={styles.sectionTitle}>Attributes</Text>

            <View style={styles.attributeRow}>
              <Text style={styles.attributeLabel}>Pace</Text>
              <Text style={styles.attributeValue}>82</Text>
            </View>

            <View style={styles.attributeRow}>
              <Text style={styles.attributeLabel}>Passing</Text>
              <Text style={styles.attributeValue}>85</Text>
            </View>

            <View style={styles.attributeRow}>
              <Text style={styles.attributeLabel}>Fin</Text>
              <Text style={styles.attributeValue}>90</Text>
            </View>

            <View style={styles.attributeRow}>
              <Text style={styles.attributeLabel}>Dribbling</Text>
              <Text style={styles.attributeValue}>80</Text>
            </View>

            <View style={styles.attributeRow}>
              <Text style={styles.attributeLabel}>Defense</Text>
              <Text style={styles.attributeValue}>40</Text>
            </View>
          </View>

          <View style={[styles.ratingBadge, overallStyle]}>
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
    paddingTop: spacing.xs,
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
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,

    borderBottomLeftRadius: 55,
    borderBottomRightRadius: 55,
  },

  topRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.md,
  },

  rarityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#2A2412',
    borderWidth: 1,
    borderColor: colors.warning,
    borderRadius: 999,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },

  rarityText: {
    ...typography.body,
    color: colors.warning,
    fontSize: 12,
    fontWeight: '700',
  },

  trendBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    backgroundColor: '#10261A',
    borderRadius: 999,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
  },

  trendText: {
    ...typography.body,
    color: '#2ECC71',
    fontSize: 12,
    fontWeight: '700',
  },

  image: {
    width: 220,
    height: 220,
    resizeMode: 'contain',
    marginBottom: spacing.md,
  },

  imagePlaceholder: {
    width: 220,
    height: 220,
    borderRadius: radius.lg,
    backgroundColor: colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },

  placeholderText: {
    fontSize: 40,
  },

  name: {
    ...typography.title,
    color: colors.text,
    fontWeight: '800',
    textAlign: 'center',
  },

  meta: {
    ...typography.body,
    color: colors.textSecondary,
    marginTop: spacing.xs,
    textAlign: 'center',
  },

  infoRow: {
    width: '100%',
    marginTop: spacing.lg,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  statusPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.background,
    borderRadius: 999,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderWidth: 1,
    borderColor: colors.border,
  },

  statusText: {
    ...typography.body,
    color: colors.text,
    fontWeight: '700',
  },

  price: {
    ...typography.title,
    color: colors.primary,
    fontWeight: '800',
  },

  attributesBox: {
    width: '100%',
    marginTop: spacing.lg,
    backgroundColor: colors.background,
    borderRadius: radius.md,
    padding: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
  },

  sectionTitle: {
    ...typography.body,
    color: colors.text,
    fontWeight: '800',
    marginBottom: spacing.sm,
    textAlign: 'center',
  },

  attributeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  attributeLabel: {
    ...typography.body,
    color: colors.textSecondary,
  },

  attributeValue: {
    ...typography.body,
    color: colors.text,
    fontWeight: '800',
  },

  ratingBadge: {
    width: 80,
    height: 80,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,

    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
    marginTop: spacing.md,
  },

  ratingText: {
    ...typography.title,
    color: colors.text,
    fontWeight: '800',
  },
});
