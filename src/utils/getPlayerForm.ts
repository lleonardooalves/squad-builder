import { PlayerForm } from '../types/player';

export function getPlayerFormModifier(form: PlayerForm) {
  if (form === 'hot') return 2;
  if (form === 'cold') return -2;

  return 0;
}

export function getPlayerFormInfo(form: PlayerForm) {
  if (form === 'hot') {
    return {
      label: 'In Form',
      trend: '+2',
      icon: 'trending-up' as const,
      statusIcon: 'flame' as const,
      color: '#2ECC71',
      backgroundColor: '#10261A',
    };
  }

  if (form === 'cold') {
    return {
      label: 'Bad Form',
      trend: '-2',
      icon: 'trending-down' as const,
      statusIcon: 'arrow-down' as const,
      color: '#FF4D4D',
      backgroundColor: '#2A1111',
    };
  }

  return {
    label: 'Normal Form',
    trend: '0',
    icon: 'remove' as const,
    statusIcon: 'ellipse' as const,
    color: '#9CA3AF',
    backgroundColor: '#1F2937',
  };
}
