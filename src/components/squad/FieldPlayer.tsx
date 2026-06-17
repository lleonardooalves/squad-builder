import { getOverallStyle } from '@/src/utils/getOverallStyle';
import { router } from 'expo-router';
import { MotiView } from 'moti';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../theme/colors';
import { radius } from '../../theme/radius';
import { spacing } from '../../theme/spacing';
import { typography } from '../../theme/typography';
import { Player } from '../../types/player';

type FieldPlayerProps = {
  player: Player;
};

export default function FieldPlayer({ player }: FieldPlayerProps) {
  const [imageError, setImageError] = useState(false);

  const overallStyle = getOverallStyle(player.rating);

  return (
    <MotiView
      from={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: 'spring' }}
    >
      <TouchableOpacity
        style={styles.token}
        activeOpacity={0.8}
        onPress={() =>
          router.push({
            pathname: '/player/[id]',
            params: { id: player.id },
          })
        }
      >
        <View style={styles.avatarWrapper}>
          {imageError ? (
            <View style={styles.avatarPlaceholder}>
              <Text style={styles.avatarPlaceholderText}>👤</Text>
            </View>
          ) : (
            <Image
              source={{ uri: player.image }}
              style={styles.avatar}
              onError={() => setImageError(true)}
            />
          )}

          <View style={[styles.ratingBadge, overallStyle]}>
            <Text style={styles.ratingText}>{player.rating}</Text>
          </View>
        </View>

        <Text style={styles.name} numberOfLines={1}>
          {player.name}
        </Text>

        <Text style={styles.position}>{player.position}</Text>
      </TouchableOpacity>
    </MotiView>
  );
}

const AVATAR_SIZE = 52;

const styles = StyleSheet.create({
  token: {
    alignItems: 'center',
    width: 70,
    marginEnd: spacing.sm,
  },

  avatarWrapper: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
  },

  avatar: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    borderWidth: 2,
    borderColor: colors.text,
    backgroundColor: colors.surfaceLight,
  },

  avatarPlaceholder: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    borderRadius: AVATAR_SIZE / 2,
    borderWidth: 2,
    borderColor: colors.text,
    backgroundColor: colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarPlaceholderText: {
    fontSize: 22,
  },

  ratingBadge: {
    position: 'absolute',
    bottom: -6,
    right: -8,
    minWidth: 24,
    height: 24,
    paddingHorizontal: 4,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  ratingText: {
    fontSize: 11,
    fontWeight: '700',
    color: colors.ratingText,
  },

  name: {
    ...typography.caption,
    color: colors.text,
    fontWeight: '700',
    marginTop: spacing.sm,
    textAlign: 'center',
    backgroundColor: 'rgba(13, 17, 23, 0.65)',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: radius.sm,
    overflow: 'hidden',
  },

  position: {
    fontSize: 10,
    fontWeight: '800',
    color: colors.text,
    marginTop: 2,
    letterSpacing: 1,
  },
});
