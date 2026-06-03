import { SquadView } from '@/src/components/squad/ViewToggle';
import { useSquadStore } from '@/src/stores/squadStore';
import { useState } from 'react';

export function useSquad() {
  const squad = useSquadStore((state) => state.squad);
  const removePlayer = useSquadStore((state) => state.removePlayer);

  const totalPlayers = squad.length;
  const totalValue = squad.reduce((sum, player) => sum + player.price, 0);

  const isEmpty = totalPlayers === 0;

  const clearSquad = useSquadStore((state) => state.clearSquad);

  const [view, setView] = useState<SquadView>('list');

  return {
    squad,
    removePlayer,
    totalPlayers,
    totalValue,
    isEmpty,
    clearSquad,
    view,
    setView,
  };
}
