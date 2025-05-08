import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// THIS IS THE TOP BUTTONS
export default function BucketSummary({ total, completed, onAdd }: { total: number; completed: number; onAdd?: () => void }) {
  return (
    <View style={styles.summary}>
      <View style={styles.pillPink}>
        <Text style={styles.pillText}>{total} buckets</Text>
      </View>
      <View style={styles.pillGrey}>
        <Text style={styles.pillText}>{completed} complete</Text>
      </View>
      {onAdd && (
        <Pressable style={styles.addButton} onPress={onAdd}>
          <Ionicons name="add" size={20} color="#fff" />
        </Pressable>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  summary: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
    alignItems: 'center',
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
  addButton: {
    marginLeft: 10,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#FFBDBD',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
