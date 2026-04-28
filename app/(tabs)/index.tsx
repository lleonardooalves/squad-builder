import HomeHeader from '@/src/components/home/HomeHeader';
import PlayersFilter from '@/src/components/home/PlayersFilter';
import PlayersList from '@/src/components/shared/PlayersList';
import SummaryCard from '@/src/components/shared/SummaryCard';
import { useFavorites } from '@/src/hooks/screens/useFavorites';
import { useHome } from '@/src/hooks/screens/useHome';
import { colors } from '@/src/theme/colors';
import { spacing } from '@/src/theme/spacing';
import { MotiView } from 'moti';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const {
    handleAddPlayer,
    squad,
    totalPlayers,
    totalPriceSquad,
    filteredPlayers,
    selectedPosition,
    setSelectedPosition,
  } = useHome();

  const { favorites, onToggleFavorite } = useFavorites();

  return (
    <MotiView
      from={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 250 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <HomeHeader />
          <SummaryCard totalPlayers={totalPlayers} totalPriceSquad={totalPriceSquad} />

          <PlayersFilter
            selectedPosition={selectedPosition}
            onSelectedPosition={(position) => setSelectedPosition(position)}
          />
          <PlayersList
            data={filteredPlayers}
            squad={squad}
            favorites={favorites}
            onAddPlayer={handleAddPlayer}
            onFavoriteToggle={onToggleFavorite}
          />
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
