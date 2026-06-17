import { Player, PlayerPosition } from '../types/player';

export const FORMATION = '4-3-3';
export const MAX_SQUAD_SIZE = 11;

export const POSITION_LIMITS: Record<PlayerPosition, number> = {
  GK: 1,
  DEF: 4,
  MID: 3,
  ATT: 3,
};

export function getAddBlockReason(squad: Player[], player: Player): string | null {
  const alreadyInSquad = squad.some((p) => p.id === player.id);
  if (alreadyInSquad) return null;

  if (squad.length >= MAX_SQUAD_SIZE) return 'Squad full';

  const positionCount = squad.filter((p) => p.position === player.position).length;
  if (positionCount >= POSITION_LIMITS[player.position]) {
    return `${player.position} full`;
  }

  return null;
}
