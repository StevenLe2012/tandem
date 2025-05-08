import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function NameScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What’s your name?</Text>
      <TextInput style={styles.input} placeholder="Your first name" />
      <Button title="Next" onPress={() => router.push('/entry/onboarding/password')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 32, backgroundColor: '#FDF3EC' },
  title: { fontSize: 20, marginBottom: 16 },
  input: { backgroundColor: '#EEE', borderRadius: 12, padding: 16, fontSize: 16 },
});
