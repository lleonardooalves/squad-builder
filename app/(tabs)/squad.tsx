import PlayersList from '@/src/components/shared/PlayersList';
import SummaryCard from '@/src/components/shared/SummaryCard';
import EmptyCard from '@/src/components/squad/EmptyCard';
import SquadHeader from '@/src/components/squad/SquadHeader';
import { useSquadStore } from '@/src/store/squadStore';
import { colors } from '@/src/theme/colors';
import { spacing } from '@/src/theme/spacing';
import { MotiView } from 'moti';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function SquadScreen() {
  const squad = useSquadStore((state) => state.squad);
  const removePlayer = useSquadStore((state) => state.removePlayer);

  const totalPlayers = squad.length;
  const totalValue = squad.reduce((sum, player) => sum + player.price, 0);

  const isEmpty = totalPlayers === 0;

  return (
    <MotiView
      from={{ opacity: 0, translateY: 10 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ type: 'timing', duration: 250 }}
      style={{ flex: 1 }}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <SquadHeader />

          <SummaryCard totalPlayers={totalPlayers} totalPriceSquad={totalValue} />

          {isEmpty ? (
            <EmptyCard />
          ) : (
            <PlayersList data={squad} squad={squad} onRemovePlayer={removePlayer} />
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
