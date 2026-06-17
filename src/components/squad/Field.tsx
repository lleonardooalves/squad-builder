import { StyleSheet, Text, View } from 'react-native';
import { radius } from '../../theme/radius';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import { Player, PlayerPosition } from '../../types/player';
import FieldPlayer from './FieldPlayer';

type FieldProps = {
  squad: Player[];
};

const ROWS: { position: PlayerPosition; label: string }[] = [
  { position: 'ATT', label: 'Attack' },
  { position: 'MID', label: 'Midfield' },
  { position: 'DEF', label: 'Defense' },
  { position: 'GK', label: 'Goalkeeper' },
];

export default function Field({ squad }: FieldProps) {
  return (
    <View style={styles.field}>
      <View style={styles.centerLine} />
      <View style={styles.centerCircle} />
      <View style={[styles.penaltyBox, styles.penaltyBoxTop]} />
      <View style={[styles.penaltyBox, styles.penaltyBoxBottom]} />

      {ROWS.map(({ position, label }) => {
        const players = squad.filter((player) => player.position === position);

        return (
          <View key={position} style={styles.row}>
            {players.length === 0 ? (
              <Text style={styles.emptyRow}>{label}</Text>
            ) : (
              players.map((player) => <FieldPlayer key={player.id} player={player} />)
            )}
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

  emptyRow: {
    ...typography.caption,
    color: 'rgba(255, 255, 255, 0.5)',
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
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
