import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function AgreementScreen() {
  const router = useRouter();
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 60 }}>
      <Text style={styles.title}>Terms & Norms</Text>
      <Text style={styles.clause}>Clause 1: Be kind.</Text>
      <Text style={styles.clause}>Clause 2: No spam or harmful activity.</Text>
      <Text style={styles.clause}>Clause 3: Respect your Tandem partners’ time.</Text>
      <Button title="Accept & Continue" onPress={() => router.replace('/tabs/explore')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 32, backgroundColor: '#FDF3EC' },
  title: { fontSize: 24, fontWeight: '600', marginBottom: 24 },
  clause: { fontSize: 16, marginBottom: 16 },
});
