import { colors } from '@/src/theme/colors';
import { spacing } from '@/src/theme/spacing';
import { typography } from '@/src/theme/typography';
import { StyleSheet, Text, View } from 'react-native';

export default function FavoritesHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.eyebrow}>SQUAD BUILDER</Text>

      <View style={styles.titleRow}>
        <Text style={styles.title}>My Favorite Players</Text>
      </View>

      <Text style={styles.subtitle}>View your favorite players</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: spacing.lg,
  },

  eyebrow: {
    ...typography.body,
    color: colors.primary,
    marginBottom: spacing.xs,
    fontWeight: '700',
    letterSpacing: 1,
  },

  title: {
    ...typography.title,
    color: colors.text,
    marginBottom: spacing.xs,
    fontWeight: '700',
  },

  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 20,
  },

  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
