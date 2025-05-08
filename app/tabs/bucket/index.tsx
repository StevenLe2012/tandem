import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from './Header';
import BucketSummary from './BucketSummary';
import BucketList from './BucketList';

const bucketItems = [
  { id: 1, title: 'Go to Encyclopedia Cave', image: require('@/assets/images/bucket/encyclopedia_cave.jpg'), completed: true },
  { id: 2, title: 'Rooftop Climb Memchu', image: require('@/assets/images/bucket/memchu.jpg'), completed: false },
  { id: 3, title: 'Picnic at Oval', image: require('@/assets/images/bucket/oval.jpg'), completed: false },
  { id: 4, title: 'Fountain Hop', image: require('@/assets/images/bucket/fountain.png'), completed: false },
];

export default function BucketScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <BucketSummary total={bucketItems.length} completed={bucketItems.filter(i => i.completed).length} />
        <BucketList items={bucketItems} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#FFEFE8',
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 12,
    paddingBottom: 8,
  },
});