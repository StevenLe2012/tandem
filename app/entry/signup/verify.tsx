import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function VerifyEmailScreen() {
  const { email } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Check Your Email</Text>
      <Text style={styles.subtitle}>
        We've sent a verification link to{"\n"}
        <Text style={styles.email}>{email}</Text>
      </Text>
      <Text style={styles.info}>Haven't received the email?</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Resend Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Change Email</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.continueButton} onPress={() => router.push('./join-friendgroup')}>
        <Text style={styles.buttonText}>Continue</Text>
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
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    color: '#000',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#000',
    textAlign: 'center',
    marginBottom: 24,
  },
  email: {
    fontWeight: '700',
    color: '#000',
  },
  info: {
    fontSize: 16,
    color: '#000',
    marginBottom: 16,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#E5DED8',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginBottom: 16,
    width: 260,
  },
  buttonText: {
    color: '#222',
    fontSize: 18,
    fontWeight: '700',
  },
  continueButton: {
    backgroundColor: '#FFB6B6',
    borderRadius: 20,
    paddingVertical: 14,
    paddingHorizontal: 40,
    alignItems: 'center',
    marginBottom: 16,
    width: 260,
  },
}); 