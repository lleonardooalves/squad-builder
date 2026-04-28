import FavoritesEmptyCard from '@/src/components/favorites/FavoritesEmptyCard';
import FavoritesHeader from '@/src/components/favorites/FavoritesHeader';
import PlayersList from '@/src/components/shared/PlayersList';
import { useFavorites } from '@/src/hooks/screens/useFavorites';
import { colors } from '@/src/theme/colors';
import { spacing } from '@/src/theme/spacing';
import { MotiView } from 'moti';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FavoritesScreen() {
  const { favorites, onToggleFavorite, isEmpty } = useFavorites();

  return (
    <MotiView
      from={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 250 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <FavoritesHeader />

          {isEmpty ? (
            <FavoritesEmptyCard />
          ) : (
            <PlayersList
              data={favorites}
              favorites={favorites}
              onFavoriteToggle={onToggleFavorite}
            />
          )}
        </View>
      </SafeAreaView>
    </MotiView>
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
});
