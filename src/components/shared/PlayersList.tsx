import { colors } from '@/src/theme/colors';
import { radius } from '@/src/theme/radius';
import { spacing } from '@/src/theme/spacing';
import { typography } from '@/src/theme/typography';
import { Player } from '@/src/types/player';
import { Ionicons } from '@expo/vector-icons';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { PlayerCard } from './PlayerCard';

type PlayersListProps = {
  data: Player[];
  squad?: Player[];
  favorites?: Player[];
  onAddPlayer?: (player: Player) => void;
  onRemovePlayer?: (id: string) => void;
  onFavoriteToggle?: (player: Player) => void;
};

export default function PlayersList({
  data,
  squad,
  favorites,
  onAddPlayer,
  onRemovePlayer,
  onFavoriteToggle,
}: PlayersListProps) {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        const isAdded = squad?.some((player) => player.id === item.id) ?? false;
        const isFavorite = favorites?.some((player) => player.id === item.id) ?? false;
        return (
          <PlayerCard
            player={item}
            onAdd={onAddPlayer}
            isAdded={isAdded}
            onRemove={onRemovePlayer}
            onFavoriteToggle={onFavoriteToggle}
            isFavorite={isFavorite}
          />
        );
      }}
      ListEmptyComponent={
        <View style={styles.emptyCard}>
          <Ionicons name="search-outline" size={48} color={colors.textSecondary} />
          <Text style={styles.emptyTitle}>No players found</Text>
          <Text style={styles.emptyDescription}>Try a different name or position</Text>
        </View>
      }
      style={{ flex: 1 }}
      contentContainerStyle={styles.listContent}
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  listContent: {
    paddingBottom: spacing.xl,
  },

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
