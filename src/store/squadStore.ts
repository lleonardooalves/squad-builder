import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Player } from "../types/player";

type SquadStore = {
  squad: Player[];
  addPlayer: (player: Player) => void;
  removePlayer: (id: string) => void;
};

export const useSquadStore = create<SquadStore>()(
  persist(
    (set) => ({
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
    }),
    {
      name: "squad-storage",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
