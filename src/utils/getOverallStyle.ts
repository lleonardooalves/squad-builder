import { colors } from '../theme/colors';

export function getOverallStyle(rating: number) {
  if (rating >= 80) {
    return {
      backgroundColor: '#F6A500',
      borderColor: '#FFD166',
      shadowColor: '#F6A500',
    };
  }

  if (rating >= 70) {
    return {
      backgroundColor: '#BFC7D5',
      borderColor: '#E5E7EB',
      shadowColor: '#BFC7D5',
    };
  }

  if (rating >= 60) {
    return {
      backgroundColor: '#B87333',
      borderColor: '#D99A5B',
      shadowColor: '#B87333',
    };
  }

  return {
    backgroundColor: colors.surfaceLight,
    borderColor: colors.border,
    shadowColor: colors.border,
  };
}
