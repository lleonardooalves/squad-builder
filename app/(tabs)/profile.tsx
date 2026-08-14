import { useAuthStore } from '@/src/stores/authStore';
import { useFavoritesStore } from '@/src/stores/favoritesStore';
import { useSquadStore } from '@/src/stores/squadStore';
import { colors } from '@/src/theme/colors';
import { radius } from '@/src/theme/radius';
import { spacing } from '@/src/theme/spacing';
import { typography } from '@/src/theme/typography';
import { Ionicons } from '@expo/vector-icons';
import { MotiView } from 'moti';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const resetFavorites = useFavoritesStore((state) => state.resetFavorites);
  const resetSquad = useSquadStore((state) => state.resetSquad);

  const initial = user?.email?.[0]?.toUpperCase() ?? '?';

  function handleLogout() {
    resetSquad();
    resetFavorites();
    logout();
  }

  return (
    <MotiView
      from={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 250 }}
      style={styles.flex}
    >
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.container}>
          <Text style={styles.screenTitle}>Profile</Text>

          <View style={styles.card}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{initial}</Text>
            </View>

            {user?.role === 'ADMIN' && (
              <View style={styles.adminBadge}>
                <Ionicons name="shield-checkmark" size={12} color={colors.warning} />
                <Text style={styles.adminBadgeText}>Admin</Text>
              </View>
            )}

            {user?.name && <Text style={styles.name}>{user.name}</Text>}

            <Text style={styles.label}>E-mail</Text>
            <Text style={styles.email}>{user?.email}</Text>
          </View>

          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout} activeOpacity={0.8}>
            <Ionicons name="log-out-outline" size={18} color={colors.red} />
            <Text style={styles.logoutText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </MotiView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },

  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },

  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.md,
    paddingTop: spacing.lg,
    gap: spacing.lg,
  },

  screenTitle: {
    ...typography.title,
    color: colors.text,
    fontWeight: '800',
  },

  card: {
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.lg,
    paddingVertical: spacing.lg,
    paddingHorizontal: spacing.md,
    gap: spacing.xs,
  },

  avatar: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },

  avatarText: {
    ...typography.title,
    fontSize: 30,
    color: colors.text,
    fontWeight: '800',
  },

  label: {
    ...typography.caption,
    color: colors.textSecondary,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },

  email: {
    ...typography.subtitle,
    color: colors.text,
  },

  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.red,
    borderRadius: radius.md,
    paddingVertical: spacing.md,
  },

  logoutText: {
    ...typography.body,
    color: colors.red,
    fontWeight: '700',
  },

  adminBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    backgroundColor: colors.background,
    borderWidth: 1,
    borderColor: colors.warning,
    borderRadius: 999,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    marginBottom: spacing.sm,
  },

  adminBadgeText: {
    ...typography.caption,
    color: colors.warning,
    fontWeight: '700',
  },

  name: {
    ...typography.title,
    color: colors.text,
    fontWeight: '800',
    marginBottom: spacing.md,
    textAlign: 'center',
  },
});
