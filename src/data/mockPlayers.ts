import { Player } from '../types/player';

export const mockPlayers: Player[] = [
  {
    id: '1',
    name: 'Carlos Vinícius',
    team: 'Grêmio',
    position: 'ATT',
    price: 30,
    rating: 90,
    attributes: {
      pace: 82,
      passing: 85,
      fin: 90,
      dribbling: 80,
      defense: 40,
    },
    form: 'hot',
    image:
      'https://www.ogol.com.br/img/jogadores/new/05/81/520581_carlos_vinicius_20260131142824.png',
  },

  {
    id: '2',
    name: 'Pedri',
    team: 'Barcelona',
    position: 'MID',
    price: 110,
    rating: 91,
    attributes: {
      pace: 84,
      passing: 94,
      fin: 78,
      dribbling: 93,
      defense: 74,
    },
    form: 'normal',
    image:
      'https://www.ogol.com.br/img/jogadores/new/96/13/739613_pedri_gonzalez_20251019000639.png',
  },

  {
    id: '3',
    name: 'Van Dijk',
    team: 'Liverpool',
    position: 'DEF',
    price: 95,
    rating: 88,
    attributes: {
      pace: 79,
      passing: 82,
      fin: 58,
      dribbling: 72,
      defense: 95,
    },
    form: 'cold',
    image:
      'https://www.ogol.com.br/img/jogadores/new/45/93/194593_virgil_van_dijk_20240816235026.png',
  },

  {
    id: '4',
    name: 'Weverton',
    team: 'Grêmio',
    position: 'GK',
    price: 85,
    rating: 90,
    attributes: {
      reflexes: 92,
      handling: 88,
      diving: 90,
      positioning: 89,
      kicking: 85,
    },
    form: 'hot',
    image: 'https://www.ogol.com.br/img/jogadores/new/36/64/53664_weverton_20260131142614.png',
  },
];
