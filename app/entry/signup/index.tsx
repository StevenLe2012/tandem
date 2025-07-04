import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LogoCircles from '../../../components/LogoCircles';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function SignUpScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
          value={name}
          onChangeText={setName}
        />
        <TextInput
          placeholder="Email Address"
          placeholderTextColor="#222"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#222"
          secureTextEntry
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <TouchableOpacity
        style={styles.signUpButton}
        onPress={() => router.push({ pathname: '/entry/signup/verify', params: { email } })}
      >
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
