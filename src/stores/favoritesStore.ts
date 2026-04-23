import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { Player } from '../types/player';

type FavoritesStore = {
  favorites: Player[];
  toggleFavorite: (player: Player) => void;
};

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set) => ({
      favorites: [],
      toggleFavorite: (player) =>
        set((state) => {
          const exists = state.favorites.find((p) => p.id === player.id);

          if (exists) {
            return {
              favorites: state.favorites.filter((p) => p.id !== player.id),
            };
          }

          return {
            favorites: [...state.favorites, player],
          };
        }),
    }),
    {
      name: 'favorites-storage',
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);
