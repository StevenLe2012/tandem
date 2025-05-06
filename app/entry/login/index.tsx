import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function LoginIndex() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Login</Text>
      <Button title="Sign In" onPress={() => router.replace('/tabs/explore')} />
      <Button title="Need an account? Sign Up" onPress={() => router.push('/entry/signup')} />
    </View>
  );
}
