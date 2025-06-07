import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function GroupCreatedScreen() {
  const { code } = useLocalSearchParams();
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>🦄</Text>
      <Text style={styles.title}>You're in a group!</Text>
      <Text style={styles.subtitle}>Invite your friends to join using this code:</Text>
      <Text style={styles.code}>{code}</Text>
      <TouchableOpacity style={styles.button} onPress={() => router.push('./add-activities')}>
        <Text style={styles.buttonText}>Start Adding Activities</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF3EC',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  emoji: {
    fontSize: 64,
    marginBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: '#222',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#222',
    marginBottom: 12,
  },
  code: {
    fontSize: 22,
    fontWeight: '700',
    textAlign: 'center',
    color: '#222',
    marginBottom: 40,
    letterSpacing: 2,
  },
  button: {
    backgroundColor: '#FFB6B6',
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: 'center',
    width: 320,
    marginBottom: 20,
  },
  buttonText: {
    color: '#222',
    fontSize: 18,
    fontWeight: '700',
  },
}); 