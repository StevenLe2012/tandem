import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import LogoCircles from '../../../components/LogoCircles';

export default function SignupIndex() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoCircles />
        <Text style={styles.logoText}>Tandem</Text>
      </View>
      <Text style={styles.title}>Contact Information</Text>
      <TextInput style={styles.input} placeholder="Enter Your Email" placeholderTextColor="#6B6054" />
      <TouchableOpacity style={styles.button} onPress={() => {/* handle continue */}}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF3EC',
    alignItems: 'center',
    paddingTop: 80,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  logoText: {
    fontSize: 24,
    fontWeight: '700',
    marginTop: 8,
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 32,
  },
  input: {
    width: 300,
    backgroundColor: '#E7DFD8',
    borderRadius: 16,
    padding: 16,
    fontSize: 16,
    marginBottom: 24,
    color: '#6B6054',
  },
  button: {
    backgroundColor: '#FFB6B6',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
  buttonText: {
    color: '#3C2A21',
    fontSize: 18,
    fontWeight: '600',
  },
});
