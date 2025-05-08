import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function InviteCodeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What’s your invite code?</Text>
      <TextInput style={styles.input} placeholder="friend123 (optional)" />
      <Button title="Next" onPress={() => router.push('/entry/onboarding/agreement')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 32, backgroundColor: '#FDF3EC' },
  title: { fontSize: 20, marginBottom: 16 },
  input: { backgroundColor: '#EEE', borderRadius: 12, padding: 16, fontSize: 16 },
});