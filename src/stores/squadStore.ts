import { create } from 'zustand';
import { addSquadPlayer, clearSquadRequest, getSquad, removeSquadPlayer } from '../services/squad';
import { Player } from '../types/player';
import { getAddBlockReason } from '../utils/squadRules';

type SquadStore = {
  squad: Player[];
  isLoading: boolean;
  loadSquad: () => Promise<void>;
  addPlayer: (player: Player) => Promise<void>;
  removePlayer: (id: string) => Promise<void>;
  clearSquad: () => Promise<void>;
  resetSquad: () => void;
};

export const useSquadStore = create<SquadStore>()((set, get) => ({
  squad: [],
  isLoading: true,

  loadSquad: async () => {
    set({ isLoading: true });
    try {
      const squad = await getSquad();
      set({ squad });
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },

  addPlayer: async (player) => {
    const squad = get().squad;

    if (squad.some((p) => p.id === player.id)) return;
    if (getAddBlockReason(squad, player) !== null) return;

    try {
      await addSquadPlayer(player.id);
      set((state) => ({ squad: [...state.squad, player] }));
    } catch (error) {
      console.error(error);
    }
  },

  removePlayer: async (id) => {
    try {
      await removeSquadPlayer(id);
      set((state) => ({ squad: state.squad.filter((p) => p.id !== id) }));
    } catch (error) {
      console.error(error);
    }
  },

  clearSquad: async () => {
    try {
      await clearSquadRequest();
      set({ squad: [] });
    } catch (error) {
      console.error(error);
    }
  },

  resetSquad: () => set({ squad: [] }),
}));
