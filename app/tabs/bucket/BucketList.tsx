import { FlatList } from 'react-native';
import BucketListItem from './BucketListItem';

// THIS USES THE BUCKETLISTITEM COMPONENT TO SHOWCASE A LIST OF ITEMS
export default function BucketList({ items, onToggle, onDelete }: { items: any[], onToggle: (id: number) => void, onDelete: (item: any) => void }) {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <BucketListItem item={item} onToggle={onToggle} onDelete={onDelete} />}
      showsVerticalScrollIndicator={false}
    />
  );
}
