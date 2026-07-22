import { useAuthStore } from '@/src/stores/authStore';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const hasHydrated = useAuthStore((state) => state.hasHydrated);

  useEffect(() => {
    if (hasHydrated) {
      void SplashScreen.hideAsync();
    }
  }, [hasHydrated]);

  if (!hasHydrated) {
    return null;
  }

  return <Stack screenOptions={{ headerShown: false }} />;
}
