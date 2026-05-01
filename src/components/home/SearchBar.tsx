import { colors } from '@/src/theme/colors';
import { radius } from '@/src/theme/radius';
import { spacing } from '@/src/theme/spacing';
import { typography } from '@/src/theme/typography';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

type SearchBarProps = {
  searchText: string;
  onSearchChange: (text: string) => void;
};

export default function SearchBar({ searchText, onSearchChange }: SearchBarProps) {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name="search" size={20} color={colors.textSecondary} />

      <TextInput
        value={searchText}
        onChangeText={onSearchChange}
        placeholder="Search players..."
        placeholderTextColor={colors.textSecondary}
        style={styles.searchInput}
      />

      {searchText.length > 0 && (
        <TouchableOpacity>
          <Ionicons
            name="close-circle"
            size={20}
            color={colors.textSecondary}
            onPress={() => onSearchChange('')}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    height: 48,
    marginBottom: spacing.md,
    gap: spacing.sm,
  },

  searchInput: {
    flex: 1,
    ...typography.body,
    color: colors.text,
    paddingVertical: 0,
  },
});
