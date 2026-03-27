import { useState } from "react";
import { mockPlayers } from "../../data/mockPlayers";
import { Player } from "../../types/player";

export function useHome() {
  const [players] = useState<Player[]>(mockPlayers);
  const [squad, setSquad] = useState<Player[]>([]);

  const handleAddPlayer = (player: Player) => {
    setSquad((prev) => {
      const exists = prev.find((p) => p.id === player.id);
      if (exists) return prev;

      return [...prev, player];
    });
  };

  const totalPlayers = squad.length;

  const totalPriceSquad = squad.reduce((total, player) => {
    return total + player.price;
  }, 0);

  return {
    players,
    squad,
    handleAddPlayer,
    totalPlayers,
    totalPriceSquad,
  };
}
