import { colors } from '@/src/theme/colors';
import { radius } from '@/src/theme/radius';
import { spacing } from '@/src/theme/spacing';
import { typography } from '@/src/theme/typography';
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native';

type ButtonClearProps = {
  onClearSquad: () => void;
};

export default function ButtonClear({ onClearSquad }: ButtonClearProps) {
  const handleClear = () => {
    Alert.alert('Clear Squad', 'Are you sure you want to remove all players?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Clear', style: 'destructive', onPress: onClearSquad },
    ]);
  };
  return (
    <TouchableOpacity onPress={handleClear} style={styles.clearButton}>
      <Text style={styles.clearButtonText}>Clear Squad</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  clearButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: colors.red,
    borderRadius: radius.xl,
    paddingHorizontal: spacing.sm,
    alignSelf: 'flex-end',
    marginBottom: spacing.sm,
  },

  clearButtonText: {
    ...typography.body,
    color: colors.red,
    fontWeight: '600',
  },
});
