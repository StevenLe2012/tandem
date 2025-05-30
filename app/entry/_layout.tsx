import { Stack } from "expo-router";

export default function EntryLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Hide header for auth screens
      }}
    />
  );
}
