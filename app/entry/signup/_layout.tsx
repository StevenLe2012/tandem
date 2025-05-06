import { Stack } from 'expo-router';

export default function SignupLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: 'Sign Up',
        headerTitleAlign: 'center',
      }}
    />
  );
}
