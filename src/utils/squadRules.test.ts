import { Player, PlayerPosition } from '../types/player';
import { getAddBlockReason } from './squadRules';

function makePlayer(id: string, position: PlayerPosition): Player {
  const base = {
    id,
    name: `Player ${id}`,
    team: 'Test FC',
    price: 10,
    rating: 80,
    image: '',
    form: 'normal' as const,
  };

  if (position === 'GK') {
    return {
      ...base,
      position: 'GK',
      attributes: { reflexes: 80, handling: 80, diving: 80, positioning: 80, kicking: 80 },
    };
  }

  return {
    ...base,
    position,
    attributes: { pace: 80, passing: 80, fin: 80, dribbling: 80, defense: 80 },
  };
}

// monta um elenco com N jogadores de uma posição
function squadWith(position: PlayerPosition, count: number): Player[] {
  return Array.from({ length: count }, (_, i) => makePlayer(`${position}-${i}`, position));
}

//TESTES----------------------------------

describe('getAddBlockReason', () => {
  test('permite adicionar quando há espaço (retorna null)', () => {
    const squad: Player[] = [];
    const novo = makePlayer('1', 'ATT');

    expect(getAddBlockReason(squad, novo)).toBeNull();
  });

  test('não bloqueia um jogador que já está no elenco (retorna null)', () => {
    const jogador = makePlayer('1', 'ATT');
    const squad = [jogador];

    expect(getAddBlockReason(squad, jogador)).toBeNull();
  });

  test("bloqueia com 'Squad full' quando já há 11 jogadores", () => {
    const squad = [
      ...squadWith('GK', 1),
      ...squadWith('DEF', 4),
      ...squadWith('MID', 3),
      ...squadWith('ATT', 3),
    ];

    expect(getAddBlockReason(squad, makePlayer('x', 'ATT'))).toBe('Squad full');
  });

  test("bloqueia com 'DEF full' ao tentar o 5º zagueiro", () => {
    const squad = squadWith('DEF', 4);
    expect(getAddBlockReason(squad, makePlayer('5', 'DEF'))).toBe('DEF full');
  });

  test("bloqueia com 'GK full' ao tentar o 2º goleiro", () => {
    const squad = squadWith('GK', 1);

    expect(getAddBlockReason(squad, makePlayer('gk2', 'GK'))).toBe('GK full');
  });

  test('permite o 4º zagueiro (ainda dentro do limite)', () => {
    const squad = squadWith('DEF', 3);

    expect(getAddBlockReason(squad, makePlayer('4', 'DEF'))).toBeNull();
  });
});
