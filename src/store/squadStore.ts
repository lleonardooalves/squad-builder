import { create } from "zustand";
import { Player } from "../types/player";

type SquadStore = {
  squad: Player[];
  addPlayer: (player: Player) => void;
  removePlayer: (id: string) => void;
};

export const useSquadStore = create<SquadStore>((set) => ({
  squad: [],
  addPlayer: (player) =>
    set((state) => {
      const exists = state.squad.find((p) => p.id === player.id);

      if (exists) {
        return state;
      }

      return {
        squad: [...state.squad, player],
      };
    }),
  removePlayer: (id) =>
    set((state) => ({
      squad: state.squad.filter((p) => p.id !== id),
    })),
}));
