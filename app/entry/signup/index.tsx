import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function SignupIndex() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Signup</Text>
      <Button title="Create Account" onPress={() => router.replace('/tabs/explore')} />
      <Button title="Back to Login" onPress={() => router.push('/entry/login')} />
    </View>
  );
}
