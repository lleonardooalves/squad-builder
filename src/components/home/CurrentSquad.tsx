import { colors } from '@/src/theme/colors';
import { radius } from '@/src/theme/radius';
import { spacing } from '@/src/theme/spacing';
import { typography } from '@/src/theme/typography';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type CurrentSquadCardProps = {
  totalPlayers: number;
  totalPriceSquad: number;
};

export default function CurrentSquadCard({ totalPlayers, totalPriceSquad }: CurrentSquadCardProps) {
  return (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => router.navigate('/squad')}
    >
      <Text style={styles.title}>Current Squad</Text>

      <View style={styles.info}>
        <Text style={styles.value}>{totalPlayers} players</Text>

        <View style={styles.divider} />

        <Text style={styles.value}>€ {totalPriceSquad}M</Text>

        <Ionicons name="chevron-forward" size={18} color={colors.textSecondary} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    marginBottom: spacing.lg,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },

  title: {
    ...typography.body,
    color: colors.text,
    fontWeight: '700',
  },

  info: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },

  value: {
    ...typography.body,
    color: colors.textSecondary,
    fontWeight: '600',
  },

  divider: {
    width: 1,
    height: 18,
    backgroundColor: colors.border,
  },
});
