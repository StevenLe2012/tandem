import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import { useMemories } from '../../context/MemoryContext';

export default function ExploreScreen() {
  const { memories } = useMemories();

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Home</Text>
      </View>
      <Text style={styles.subheader}>See what your friends have kept!</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {memories.map((memory) => (
          <View key={memory.id} style={styles.card}>
            <Image source={{ uri: memory.image }} style={styles.image} />
            <View style={styles.captionRow}>
              <FontAwesome name="user-circle-o" size={22} color="#6B6054" style={{ marginRight: 8 }} />
              <View>
                <Text style={styles.caption}>
                  <Text style={{ fontWeight: 'bold' }}>{memory.activity}</Text>
                </Text>
                <Text style={styles.meta}>
                  From {memory.user}
                  {memory.date ? `, ${memory.date}` : ''}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  header: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
  },
  subheader: {
    color: '#FFADAD',
    fontWeight: '700',
    fontSize: 16,
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#FFF6F2',
    borderRadius: 20,
    padding: 12,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 160,
    borderRadius: 16,
    marginBottom: 12,
  },
  captionRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  caption: {
    fontSize: 16,
    color: '#222',
    marginBottom: 2,
  },
  meta: {
    fontSize: 13,
    color: '#6B6054',
  },
});