import { useSquadStore } from '@/src/stores/squadStore';
import { useState } from 'react';
import { mockPlayers } from '../../data/mockPlayers';
import { Player } from '../../types/player';
import { useFavorites } from './useFavorites';

export function useHome() {
  const [players] = useState<Player[]>(mockPlayers);

  const squad = useSquadStore((state) => state.squad);
  const addPlayer = useSquadStore((state) => state.addPlayer);
  const removePlayer = useSquadStore((state) => state.removePlayer);

  const [selectedPosition, setSelectedPosition] = useState('all');
  const filteredPlayers =
    selectedPosition === 'all'
      ? players
      : players.filter((player) => player.position === selectedPosition);

  const totalPlayers = squad.length;

  const totalPriceSquad = squad.reduce((total, player) => {
    return total + player.price;
  }, 0);

  const { favorites, onToggleFavorite } = useFavorites();

  return {
    players,
    squad,
    handleAddPlayer: addPlayer,
    handleRemovePlayer: removePlayer,
    totalPlayers,
    totalPriceSquad,
    filteredPlayers,
    selectedPosition,
    setSelectedPosition,
    favorites,
    onToggleFavorite,
  };
}
