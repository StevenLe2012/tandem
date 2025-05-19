import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import LogoCircles from '../../../components/LogoCircles';
import { useState } from 'react';

export default function InviteCodePage() {
  const router = useRouter();
  const [inviteCode, setInviteCode] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoCircles />
      </View>
      <Text style={styles.title}>Join your{"\n"}friend group</Text>
      <Text style={styles.subtitle}>Enter the invite code a friend shared with you.</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter invite code"
        placeholderTextColor="#6B6054"
        value={inviteCode}
        onChangeText={setInviteCode}
      />
      <TouchableOpacity style={styles.button} onPress={() => {/* handle join group */}}>
        <Text style={styles.buttonText}>Join Group</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {/* handle no code */}}>
        <Text style={styles.noCodeText}>I don't have a code.</Text>
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
  title: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
    color: '#222',
  },
  input: {
    width: 320,
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
    marginBottom: 32,
  },
  buttonText: {
    color: '#3C2A21',
    fontSize: 18,
    fontWeight: '700',
  },
  noCodeText: {
    color: '#222',
    fontSize: 16,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
}); 