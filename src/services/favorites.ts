import { Player } from '../types/player';
import { authFetch } from './api';

export async function getFavorites(): Promise<Player[]> {
  const response = await authFetch('/favorites');

  if (!response.ok) {
    throw new Error('Falha ao buscar favoritos');
  }

  const data: { player: Player }[] = await response.json();
  return data.map((favorite) => favorite.player);
}

export async function addFavorite(playerId: string) {
  const response = await authFetch(`/favorites/${playerId}`, { method: 'POST' });
  if (!response.ok) {
    throw new Error('Erro ao favoritar jogador');
  }
}

export async function removeFavorite(playerId: string) {
  const response = await authFetch(`/favorites/${playerId}`, { method: 'DELETE' });
  if (!response.ok) {
    throw new Error('Erro ao remover jogador');
  }
}
