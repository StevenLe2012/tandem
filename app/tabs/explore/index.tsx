import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function ExploreScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to Explore Tab!</Text>
      <Button title="Go to Login" onPress={() => router.push('/login')} />
    </View>
  );
}