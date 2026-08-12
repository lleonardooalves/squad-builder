import { create } from 'zustand';
import { addFavorite, getFavorites, removeFavorite } from '../services/favorites';
import { Player } from '../types/player';

type FavoritesStore = {
  favorites: Player[];
  toggleFavorite: (player: Player) => Promise<void>;
  isLoading: boolean;
  loadFavorites: () => Promise<void>;
  resetFavorites: () => void;
};

export const useFavoritesStore = create<FavoritesStore>()((set, get) => ({
  favorites: [],
  isLoading: true,

  loadFavorites: async () => {
    set({ isLoading: true });
    try {
      const favorites = await getFavorites();
      set({ favorites });
    } catch (error) {
      console.error(error);
    } finally {
      set({ isLoading: false });
    }
  },

  toggleFavorite: async (player) => {
    const exists = get().favorites.some((p) => p.id === player.id);

    try {
      if (exists) {
        await removeFavorite(player.id);
        set((state) => ({
          favorites: state.favorites.filter((p) => p.id !== player.id),
        }));
      } else {
        await addFavorite(player.id);
        set((state) => ({ favorites: [...state.favorites, player] }));
      }
    } catch (error) {
      console.error(error);
    }
  },
  resetFavorites: () => set({ favorites: [] }),
}));
