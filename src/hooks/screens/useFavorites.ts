import { useFavoritesStore } from '@/src/stores/favoritesStore';

export function useFavorites() {
  const onToggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const favorites = useFavoritesStore((state) => state.favorites);
  const isEmpty = favorites.length === 0;

  return {
    favorites,
    onToggleFavorite,
    isEmpty,
  };
}
