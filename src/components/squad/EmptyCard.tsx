import { colors } from '@/src/theme/colors';
import { radius } from '@/src/theme/radius';
import { spacing } from '@/src/theme/spacing';
import { typography } from '@/src/theme/typography';
import { StyleSheet, Text, View } from 'react-native';

export default function EmptyCard() {
  return (
    <View style={styles.emptyCard}>
      <View style={styles.emptyIconWrapper}>
        <Text style={styles.emptyIcon}>⚽</Text>
      </View>

      <Text style={styles.emptyTitle}>Your squad is empty</Text>
      <Text style={styles.emptyDescription}>
        Go to the Home tab and add players to start building your dream team.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyCard: {
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    padding: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.md,
  },

  emptyIconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },

  emptyIcon: {
    fontSize: 28,
  },

  emptyTitle: {
    ...typography.subtitle,
    color: colors.text,
    marginBottom: spacing.sm,
    fontWeight: '700',
  },

  emptyDescription: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 20,
  },
});
