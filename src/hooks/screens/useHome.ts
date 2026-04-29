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
  const [searchText, setSearchText] = useState('');

  const filteredPlayers = players
    .filter((player) => (selectedPosition === 'all' ? true : player.position === selectedPosition))
    .filter((player) => player.name.toLowerCase().includes(searchText.trim().toLowerCase()));

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
    searchText,
    setSearchText,
  };
}
