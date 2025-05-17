import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import LogoCircles from '../../../components/LogoCircles';

export default function LoginIndex() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoCircles />
        <Text style={styles.logoText}>Tandem</Text>
      </View>

      <Text style={styles.tagline}>Your way of making the most of college.</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Your Email"
          style={styles.input}
          placeholderTextColor="#666"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          secureTextEntry
          placeholderTextColor="#666"
        />
      </View>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => router.replace('/tabs/explore')}
      >
        <Text style={styles.signInText}>Sign in</Text>
      </TouchableOpacity>

      <View style={styles.bottomLinks}>
        <TouchableOpacity onPress={() => router.push('/entry/signup')}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.link}>Forgot Passwords</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF5F5',
    padding: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '600',
    marginTop: 10,
  },
  tagline: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 40,
    color: '#333',
  },
  inputContainer: {
    gap: 15,
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#E8E8E8',
    padding: 15,
    borderRadius: 8,
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: '#FFB6C1',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 30,
  },
  signInText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: '600',
  },
  bottomLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  link: {
    color: '#FF69B4',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});
