import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { spacing } from '../../theme/spacing';
import { PlayerPosition } from '../../types/player';

type EmptySlotProps = {
  position: PlayerPosition;
};

const SLOT_SIZE = 52;

export default function EmptySlot({ position }: EmptySlotProps) {
  return (
    <View style={styles.slot}>
      <View style={styles.circle}>
        <Ionicons name="add" size={22} color="rgba(255, 255, 255, 0.6)" />
      </View>

      <Text style={styles.position}>{position}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  slot: {
    alignItems: 'center',
    width: 70,
    marginEnd: spacing.sm,
  },

  circle: {
    width: SLOT_SIZE,
    height: SLOT_SIZE,
    borderRadius: SLOT_SIZE / 2,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    alignItems: 'center',
    justifyContent: 'center',
  },

  position: {
    fontSize: 10,
    fontWeight: '800',
    color: 'rgba(255, 255, 255, 0.7)',
    marginTop: spacing.sm,
    letterSpacing: 1,
  },
});
