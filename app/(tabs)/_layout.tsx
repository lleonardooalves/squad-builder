import { useAuthStore } from '@/src/stores/authStore';
import { useFavoritesStore } from '@/src/stores/favoritesStore';
import { useSquadStore } from '@/src/stores/squadStore';
import { colors } from '@/src/theme/colors';
import { Ionicons } from '@expo/vector-icons';
import { Redirect, Tabs } from 'expo-router';
import { useEffect } from 'react';

export default function TabsLayout() {
  const token = useAuthStore((state) => state.token);
  const loadFavorites = useFavoritesStore((state) => state.loadFavorites);
  const loadSquad = useSquadStore((state) => state.loadSquad);

  useEffect(() => {
    if (!token) return;
    void loadFavorites();
    void loadSquad();
  }, [token, loadFavorites, loadSquad]);

  if (!token) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        animation: 'shift',
        tabBarStyle: {
          backgroundColor: colors.surface,
          borderTopColor: colors.border,
          borderTopWidth: 2,
          height: 80,
          paddingTop: 5,
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textSecondary,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={20} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="squad"
        options={{
          title: 'My Squad',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'people-circle' : 'people-circle-outline'}
              size={22}
              color={color}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          title: 'Favorites',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'star' : 'star-outline'} size={22} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
