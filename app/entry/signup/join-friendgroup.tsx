import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LogoCircles from '../../../components/LogoCircles';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function JoinFriendGroupScreen() {
  const router = useRouter();
  const [inviteCode, setInviteCode] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoCircles />
      </View>
      <Text style={styles.title}>Join your{"\n"}friend group</Text>
      <Text style={styles.subtitle}>
        Enter the invite code a friend{"\n"}shared with you.
      </Text>
      <TextInput
        placeholder="Enter invite code"
        placeholderTextColor="#222"
        style={styles.input}
        value={inviteCode}
        onChangeText={setInviteCode}
      />
      <TouchableOpacity
        style={styles.joinButton}
        onPress={() => router.push({ pathname: './group-created', params: { code: 'XVI0KA89' } })}
      >
        <Text style={styles.joinButtonText}>Join Group</Text>
      </TouchableOpacity>
      <Text style={styles.noCodeText}>I don't have a code.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF3EC',
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: '#222',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#222',
    marginBottom: 32,
  },
  input: {
    backgroundColor: '#E5DED8',
    borderRadius: 20,
    paddingVertical: 16,
    paddingHorizontal: 24,
    fontSize: 18,
    fontWeight: '400',
    color: '#222',
    width: '100%',
    marginBottom: 32,
  },
  joinButton: {
    backgroundColor: '#FFB6B6',
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
    width: 220,
    marginBottom: 32,
  },
  joinButtonText: {
    color: '#222',
    fontSize: 18,
    fontWeight: '700',
  },
  noCodeText: {
    color: '#222',
    fontSize: 16,
    textAlign: 'center',
  },
}); 