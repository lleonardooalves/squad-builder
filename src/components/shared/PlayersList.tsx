import { spacing } from '@/src/theme/spacing';
import { Player } from '@/src/types/player';
import { FlatList, StyleSheet } from 'react-native';
import { PlayerCard } from './PlayerCard';

type PlayersListProps = {
  data: Player[];
  squad: Player[];
  onAddPlayer?: (player: Player) => void;
  onRemovePlayer?: (id: string) => void;
};

export default function PlayersList({
  data,
  squad,
  onAddPlayer,
  onRemovePlayer,
}: PlayersListProps) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        const isAdded = squad.some((player) => player.id === item.id);
        return (
          <PlayerCard
            player={item}
            onAdd={onAddPlayer}
            isAdded={isAdded}
            onRemove={onRemovePlayer}
          />
        );
      }}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: spacing.xl,
  },
});
