import { useSquadStore } from '@/src/stores/squadStore';

export function useSquad() {
  const squad = useSquadStore((state) => state.squad);
  const removePlayer = useSquadStore((state) => state.removePlayer);

  const totalPlayers = squad.length;
  const totalValue = squad.reduce((sum, player) => sum + player.price, 0);

  const isEmpty = totalPlayers === 0;

  const clearSquad = useSquadStore((state) => state.clearSquad);

  return {
    squad,
    removePlayer,
    totalPlayers,
    totalValue,
    isEmpty,
    clearSquad,
  };
}
