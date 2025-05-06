import { Stack } from 'expo-router';

export default function LoginLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: 'Login',
        headerTitleAlign: 'center',
      }}
    />
  );
}
