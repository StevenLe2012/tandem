import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LogoCircles from '../../../components/LogoCircles';
import { useRouter } from 'expo-router';

export default function SignUpScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoCircles />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          placeholderTextColor="#222"
          style={styles.input}
        />
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#222"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#222"
          secureTextEntry
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.signUpButton}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF3EC',
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  inputContainer: {
    gap: 24,
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#E5DED8',
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 24,
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },
  signUpButton: {
    backgroundColor: '#FFB6B6',
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 10,
  },
  signUpText: {
    color: '#222',
    fontSize: 18,
    fontWeight: '700',
  },
});
