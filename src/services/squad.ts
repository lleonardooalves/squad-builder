import { Player } from '../types/player';
import { authFetch } from './api';

export async function getSquad(): Promise<Player[]> {
  const response = await authFetch('/squads');
  if (!response.ok) {
    throw new Error('Falha ao buscar time');
  }
  const data: { player: Player }[] = await response.json();
  return data.map((item) => item.player);
}

export async function addSquadPlayer(playerId: string) {
  const response = await authFetch(`/squads/${playerId}`, { method: 'POST' });
  if (!response.ok) {
    const body = (await response.json().catch(() => null)) as { message?: string } | null;
    throw new Error(body?.message ?? 'Falha ao adicionar jogador');
  }
}

export async function removeSquadPlayer(playerId: string) {
  const response = await authFetch(`/squads/${playerId}`, { method: 'DELETE' });
  if (!response.ok) {
    throw new Error('Falha ao remover jogador');
  }
}

export async function clearSquadRequest() {
  const response = await authFetch(`/squads`, { method: 'DELETE' });
  if (!response.ok) {
    throw new Error('Falha ao limpar squad');
  }
}
