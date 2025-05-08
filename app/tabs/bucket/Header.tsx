import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// THIS IS THE HEADER OF THE BUCKET LIST (TODO: ADD IN FOR EACH PERSON NAME BASED ON LOGIN)
export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Steven's Bucket List</Text>
      <Pressable>
        <Ionicons name="notifications-outline" size={24} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
});