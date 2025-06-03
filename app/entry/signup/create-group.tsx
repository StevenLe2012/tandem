import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LogoCircles from '../../../components/LogoCircles';
import { useState } from 'react';
import { useRouter } from 'expo-router';

export default function CreateGroupScreen() {
  const [groupName, setGroupName] = useState('');
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <LogoCircles />
      </View>
      <Text style={styles.title}>Create Your Group</Text>
      <Text style={styles.subtitle}>You'll get a shareable code</Text>
      <TextInput
        placeholder="Group name (optional)"
        placeholderTextColor="#6B6054"
        style={styles.input}
        value={groupName}
        onChangeText={setGroupName}
      />
      <TouchableOpacity
        style={styles.continueButton}
        onPress={() => router.push({ pathname: './group-created', params: { code: 'placeholdertillourbackendisinaction' } })}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
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
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    textAlign: 'center',
    color: '#222',
    marginBottom: 16,
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
  continueButton: {
    backgroundColor: '#FFB6B6',
    borderRadius: 20,
    paddingVertical: 14,
    alignItems: 'center',
    width: 220,
    marginBottom: 32,
  },
  continueButtonText: {
    color: '#222',
    fontSize: 18,
    fontWeight: '700',
  },
}); 