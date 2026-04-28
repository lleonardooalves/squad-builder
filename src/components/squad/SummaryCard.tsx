import { colors } from '@/src/theme/colors';
import { radius } from '@/src/theme/radius';
import { spacing } from '@/src/theme/spacing';
import { typography } from '@/src/theme/typography';
import { StyleSheet, Text, View } from 'react-native';
import ButtonClear from './ButtonClear';

type SummaryCardProps = {
  totalPlayers: number;
  totalPriceSquad: number;
  onClearSquad: () => void;
};

export default function SummaryCard({
  totalPlayers,
  totalPriceSquad,
  onClearSquad,
}: SummaryCardProps) {
  return (
    <View style={styles.summaryCard}>
      <View style={styles.titleRow}>
        <Text style={styles.summaryTitle}>Squad Summary</Text>
        {totalPlayers > 0 && <ButtonClear onClearSquad={onClearSquad} />}
      </View>

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
  );
}

const styles = StyleSheet.create({
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
  summaryRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  summaryItem: {
    flex: 1,
    alignItems: 'center',
  },

  summaryValue: {
    ...typography.title,
    color: colors.text,
    fontWeight: '700',
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

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: spacing.md,
  },
});
