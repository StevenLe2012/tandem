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

      <Text style={styles.tagline}>Your way of making the most of college with friends.</Text>

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

      <Text style={styles.signInHeading}>Sign in</Text>
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => router.replace('/tabs/explore')}
      >
        {/* No text inside the button, just a pink circle */}
      </TouchableOpacity>

      <View style={styles.bottomLinks}>
        <TouchableOpacity onPress={() => router.push('/entry/signup')} style={styles.linkContainer}>
          <Text style={styles.link}>Sign Up</Text>
          <View style={styles.greenUnderline} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.link}>Forgot Password</Text>
          <View style={styles.pinkUnderline} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF3EC',
    padding: 20,
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 10,
    color: '#000',
  },
  tagline: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#000',
    fontWeight: '600',
  },
  inputContainer: {
    gap: 15,
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#E5DED8',
    padding: 18,
    borderRadius: 16,
    fontSize: 16,
    color: '#000',
  },
  signInHeading: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    marginBottom: 10,
    marginLeft: 4,
  },
  signInButton: {
    backgroundColor: '#FFB6B6',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignSelf: 'flex-end',
    marginRight: 20,
    marginBottom: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  bottomLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  linkContainer: {
    alignItems: 'center',
  },
  link: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  greenUnderline: {
    height: 4,
    width: 60,
    backgroundColor: '#D6F5D6',
    borderRadius: 2,
  },
  pinkUnderline: {
    height: 4,
    width: 120,
    backgroundColor: '#FFD6D6',
    borderRadius: 2,
  },
});
