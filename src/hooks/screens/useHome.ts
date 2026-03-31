import { useSquadStore } from "@/src/store/squadStore";
import { useState } from "react";
import { mockPlayers } from "../../data/mockPlayers";
import { Player } from "../../types/player";

export function useHome() {
  const [players] = useState<Player[]>(mockPlayers);

  const squad = useSquadStore((state) => state.squad);
  const addPlayer = useSquadStore((state) => state.addPlayer);
  const removePlayer = useSquadStore((state) => state.removePlayer);

  const totalPlayers = squad.length;

  const totalPriceSquad = squad.reduce((total, player) => {
    return total + player.price;
  }, 0);

  return {
    players,
    squad,
    handleAddPlayer: addPlayer,
    handleRemovePlayer: removePlayer,
    totalPlayers,
    totalPriceSquad,
  };
}
