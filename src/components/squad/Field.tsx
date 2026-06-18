import { StyleSheet, View } from 'react-native';
import { radius } from '../../theme/radius';
import { spacing } from '../../theme/spacing';
import { Player, PlayerPosition } from '../../types/player';
import { POSITION_LIMITS } from '../../utils/squadRules';
import EmptySlot from './EmptySlot';
import FieldPlayer from './FieldPlayer';

type FieldProps = {
  squad: Player[];
};

const ROWS: PlayerPosition[] = ['ATT', 'MID', 'DEF', 'GK'];

export default function Field({ squad }: FieldProps) {
  return (
    <View style={styles.field}>
      <View style={styles.centerLine} />
      <View style={styles.centerCircle} />
      <View style={[styles.penaltyBox, styles.penaltyBoxTop]} />
      <View style={[styles.penaltyBox, styles.penaltyBoxBottom]} />

      {ROWS.map((position) => {
        const players = squad.filter((player) => player.position === position);
        const emptyCount = Math.max(0, POSITION_LIMITS[position] - players.length);

        return (
          <View key={position} style={styles.row}>
            {players.map((player) => (
              <FieldPlayer key={player.id} player={player} />
            ))}

            {Array.from({ length: emptyCount }).map((_, index) => (
              <EmptySlot key={`${position}-empty-${index}`} position={position} />
            ))}
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  field: {
    flex: 1,
    backgroundColor: '#15803D',
    borderRadius: radius.lg,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.25)',
    paddingVertical: spacing.md,
    overflow: 'hidden',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.sm,
    minHeight: 80,
  },

  centerLine: {
    position: 'absolute',
    top: '50%',
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: 'rgba(255, 255, 255, 0.25)',
  },

  centerCircle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: 90,
    height: 90,
    marginLeft: -45,
    marginTop: -45,
    borderRadius: 45,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },

  penaltyBox: {
    position: 'absolute',
    left: '50%',
    width: 140,
    height: 60,
    marginLeft: -70,
    borderWidth: 2,
    borderColor: 'rgba(255, 255, 255, 0.25)',
  },

  penaltyBoxTop: {
    top: -2,
    borderTopWidth: 0,
    borderBottomLeftRadius: radius.sm,
    borderBottomRightRadius: radius.sm,
  },

  penaltyBoxBottom: {
    bottom: -2,
    borderBottomWidth: 0,
    borderTopLeftRadius: radius.sm,
    borderTopRightRadius: radius.sm,
  },
});
