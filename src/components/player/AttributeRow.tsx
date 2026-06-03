import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../theme/colors';
import { radius } from '../../theme/radius';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

type AttributeRowProps = {
  label: string;
  base: number;
  modifier: number;
};

export default function AttributeRow({ label, base, modifier }: AttributeRowProps) {
  const finalValue = base + modifier;
  const isPositive = modifier > 0;

  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.valueWrapper}>
        <Text style={styles.value}>{finalValue}</Text>

        {modifier !== 0 && (
          <View
            style={[styles.deltaBadge, { backgroundColor: isPositive ? '#10261A' : '#2A1111' }]}
          >
            <Ionicons
              name={isPositive ? 'arrow-up' : 'arrow-down'}
              size={11}
              color={isPositive ? '#2ECC71' : '#FF4D4D'}
            />
            <Text style={[styles.deltaText, { color: isPositive ? '#2ECC71' : '#FF4D4D' }]}>
              {isPositive ? `+${modifier}` : modifier}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },

  label: {
    ...typography.body,
    color: colors.textSecondary,
  },

  valueWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },

  value: {
    ...typography.body,
    color: colors.text,
    fontWeight: '800',
  },

  deltaBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    borderRadius: radius.sm,
    paddingHorizontal: 6,
    paddingVertical: 2,
    minWidth: 38,
    justifyContent: 'center',
  },

  deltaText: {
    ...typography.caption,
    fontWeight: '800',
  },
});
