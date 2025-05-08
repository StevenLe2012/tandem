import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function ContactScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter your email</Text>
      <TextInput style={styles.input} placeholder="you@stanford.edu" />
      <Button title="Next" onPress={() => router.push('/entry/onboarding/name')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 32, backgroundColor: '#FDF3EC' },
  title: { fontSize: 20, marginBottom: 16 },
  input: { backgroundColor: '#EEE', borderRadius: 12, padding: 16, fontSize: 16 },
});