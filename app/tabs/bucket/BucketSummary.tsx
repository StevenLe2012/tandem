import { View, Text, StyleSheet } from 'react-native';

// THIS IS THE TOP BUTTONS
export default function BucketSummary({ total, completed }: { total: number; completed: number }) {
  return (
    <View style={styles.summary}>
      <View style={styles.pillPink}>
        <Text style={styles.pillText}>{total} buckets</Text>
      </View>
      <View style={styles.pillGrey}>
        <Text style={styles.pillText}>{completed} complete</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  summary: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  pillPink: {
    backgroundColor: '#FFBDBD',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  pillGrey: {
    backgroundColor: '#EAEAEA',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  pillText: {
    fontWeight: '600',
  },
});
