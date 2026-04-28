import { colors } from '@/src/theme/colors';
import { spacing } from '@/src/theme/spacing';
import { typography } from '@/src/theme/typography';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FavoritesHeader() {
  return (
    <View style={styles.header}>
      <Text style={styles.eyebrow}>SQUAD BUILDER</Text>

      <View style={styles.titleRow}>
        <Text style={styles.title}>My Favorite Players</Text>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => router.navigate('/')}
          activeOpacity={0.8}
        >
          <Ionicons name="home" size={18} color={colors.text} />
        </TouchableOpacity>
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
});
