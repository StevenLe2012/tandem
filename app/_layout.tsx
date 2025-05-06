import { Stack } from 'expo-router';
import { ThemeProvider } from '@react-navigation/native';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from '@/components/useColorScheme';

export default function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        {/* Entry point — you can redirect based on auth status */}
        <Stack.Screen name="index" />

        {/* Login flow */}
        <Stack.Screen name="entry" />

        {/* Tabbed app */}
        <Stack.Screen name="tabs" />
      </Stack>
    </ThemeProvider>
  );
}
