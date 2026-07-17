import CurrentSquadCard from '@/src/components/home/CurrentSquad';
import HomeHeader from '@/src/components/home/HomeHeader';
import PlayersFilter from '@/src/components/home/PlayersFilter';
import SearchBar from '@/src/components/home/SearchBar';
import LoadingScreen from '@/src/components/shared/LoadingScreen';
import PlayersList from '@/src/components/shared/PlayersList';
import { useHome } from '@/src/hooks/screens/useHome';
import { useAuthStore } from '@/src/stores/authStore';
import { colors } from '@/src/theme/colors';
import { spacing } from '@/src/theme/spacing';
import { MotiView } from 'moti';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const logout = useAuthStore((state) => state.logout);

  const {
    handleAddPlayer,
    squad,
    totalPlayers,
    totalPriceSquad,
    filteredPlayers,
    selectedPosition,
    setSelectedPosition,
    favorites,
    onToggleFavorite,
    searchText,
    setSearchText,
    isLoading,
  } = useHome();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <MotiView
      from={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 250 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.container}>
          <HomeHeader />
          <TouchableOpacity onPress={logout}>
            <Text style={{ color: colors.text }}>Sair</Text>
          </TouchableOpacity>
          <CurrentSquadCard totalPlayers={totalPlayers} totalPriceSquad={totalPriceSquad} />
          <SearchBar searchText={searchText} onSearchChange={setSearchText} />
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
