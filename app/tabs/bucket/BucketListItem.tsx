import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Swipeable } from 'react-native-gesture-handler';

// THIS IS THE VIEW OF A SINGLE ITEM IN THE LIST
export default function BucketListItem({ item, onToggle, onDelete }: { item: any, onToggle: (id: number) => void, onDelete: (item: any) => void }) {
  const renderRightActions = () => (
    <Pressable style={styles.deleteButton} onPress={() => onDelete(item)}>
      <Ionicons name="trash" size={24} color="#fff" />
    </Pressable>
  );

  return (
    <Swipeable renderRightActions={renderRightActions}>
      <View style={styles.container}>
        <Pressable style={styles.circle} onPress={() => onToggle(item.id)}>
          {item.completed && <Ionicons name="checkmark" size={16} color="white" />}
        </Pressable>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Ionicons name="chevron-forward" size={20} color="#999" />
      </View>
    </Swipeable>
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
  deleteButton: {
    backgroundColor: '#FF4D4F',
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: '100%',
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
});
