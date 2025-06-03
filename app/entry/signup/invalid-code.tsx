import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function InvalidCodeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Invalid Code</Text>
      <Text style={styles.subtitle}>Sorry, that invite code is not valid.</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Try Again</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Create a New Group</Text>
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
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#E5DED8',
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: 'center',
    width: 320,
    marginBottom: 20,
  },
  buttonText: {
    color: '#222',
    fontSize: 20,
    fontWeight: '700',
  },
}); 