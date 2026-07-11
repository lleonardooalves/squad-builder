import { getPlayers } from '@/src/services/players';
import { useSquadStore } from '@/src/stores/squadStore';
import { useEffect, useState } from 'react';
import { Player } from '../../types/player';
import { useDebounce } from './useDebounce';
import { useFavorites } from './useFavorites';

export function useHome() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const squad = useSquadStore((state) => state.squad);
  const addPlayer = useSquadStore((state) => state.addPlayer);
  const removePlayer = useSquadStore((state) => state.removePlayer);

  const [selectedPosition, setSelectedPosition] = useState('all');
  const [searchText, setSearchText] = useState('');
  const debouncedSearch = useDebounce(searchText, 300);

  const filteredPlayers = players
    .filter((player) => (selectedPosition === 'all' ? true : player.position === selectedPosition))
    .filter((player) => player.name.toLowerCase().includes(debouncedSearch.trim().toLowerCase()));

  const totalPlayers = squad.length;

  const totalPriceSquad = squad.reduce((total, player) => {
    return total + player.price;
  }, 0);

  const { favorites, onToggleFavorite } = useFavorites();

  useEffect(() => {
    getPlayers()
      .then((data) => setPlayers(data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

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
    isLoading,
  };
}
