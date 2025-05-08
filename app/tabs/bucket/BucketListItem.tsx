import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// THIS IS THE VIEW OF A SINGLE ITEM IN THE LIST
export default function BucketListItem({ item }: { item: any }) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.circle}>
        {item.completed && <Ionicons name="checkmark" size={16} color="white" />}
      </View>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Ionicons name="chevron-forward" size={20} color="#999" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFBDBD',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginRight: 12,
  },
  title: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
  },
});
