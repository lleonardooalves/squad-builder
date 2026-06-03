import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../theme/colors';
import { radius } from '../../theme/radius';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';

export type SquadView = 'list' | 'field';

type ViewToggleProps = {
  value: SquadView;
  onChange: (view: SquadView) => void;
};

const OPTIONS: { value: SquadView; label: string; icon: keyof typeof Ionicons.glyphMap }[] = [
  { value: 'list', label: 'List', icon: 'list' },
  { value: 'field', label: 'Field', icon: 'football' },
];

export default function ViewToggle({ value, onChange }: ViewToggleProps) {
  return (
    <View style={styles.container}>
      {OPTIONS.map((option) => {
        const isActive = value === option.value;

        return (
          <TouchableOpacity
            key={option.value}
            style={[styles.option, isActive && styles.optionActive]}
            onPress={() => onChange(option.value)}
            activeOpacity={0.8}
          >
            <Ionicons
              name={option.icon}
              size={16}
              color={isActive ? colors.text : colors.textSecondary}
            />
            <Text style={[styles.label, isActive && styles.labelActive]}>{option.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    padding: spacing.xs,
    gap: spacing.xs,
    marginBottom: spacing.md,
  },

  option: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
    paddingVertical: spacing.sm,
    borderRadius: radius.sm,
  },

  optionActive: {
    backgroundColor: colors.primary,
  },

  label: {
    ...typography.body,
    color: colors.textSecondary,
    fontWeight: '600',
  },

  labelActive: {
    color: colors.text,
  },
});
