import { View, StyleSheet, SafeAreaView, Text, Modal, TextInput, Button } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';

import Header from './Header';
import BucketSummary from './BucketSummary';
import BucketList from './BucketList';
import { sharedItems as initialSharedItems, individualItems as initialIndividualItems } from '@/app/data/bucketData';

export default function BucketScreen() {
  const [selectedUser, setSelectedUser] = useState<string>(Object.keys(initialIndividualItems)[0]);
  const [open, setOpen] = useState(false);
  const [sharedItems, setSharedItems] = useState(initialSharedItems);
  const [individualItems, setIndividualItems] = useState(initialIndividualItems);
  const personalItems = individualItems[selectedUser];
  const [modalVisible, setModalVisible] = useState(false);
  const [newItemTitle, setNewItemTitle] = useState('');
  const [addTarget, setAddTarget] = useState<'shared' | 'individual' | null>(null);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{ item: any, type: 'shared' | 'individual' } | null>(null);
  const router = useRouter();

  const items = Object.keys(individualItems).map(name => ({
    label: name,
    value: name
  }));

  const toggleSharedItem = (id: number) => {
    setSharedItems(prev => prev.map(item => {
      if (item.id === id) {
        const updated = { ...item, completed: !item.completed };
        if (!item.completed) {
          // Only trigger when marking as completed
          router.push({ pathname: '/tabs/bucket/MemoryUpload', params: { activity: item.title } });
        }
        return updated;
      }
      return item;
    }));
  };

  const toggleIndividualItem = (id: number) => {
    setIndividualItems(prev => {
      const updatedItems = prev[selectedUser].map(item => {
        if (item.id === id) {
          const updated = { ...item, completed: !item.completed };
          if (!item.completed) {
            // Only trigger when marking as completed
            router.push({ pathname: '/tabs/bucket/MemoryUpload', params: { activity: item.title } });
          }
          return updated;
        }
        return item;
      });
      return {
        ...prev,
        [selectedUser]: updatedItems,
      };
    });
  };

  const handleAdd = (target: 'shared' | 'individual') => {
    setAddTarget(target);
    setModalVisible(true);
  };

  const handleSubmitNewItem = () => {
    if (!newItemTitle.trim()) return;
    const newItem = {
      id: Date.now(),
      title: newItemTitle,
      image: require('@/assets/images/bucket/fountain.png'), // Placeholder image
      completed: false,
    };
    if (addTarget === 'shared') {
      setSharedItems(prev => [...prev, newItem]);
    } else if (addTarget === 'individual') {
      setIndividualItems(prev => ({
        ...prev,
        [selectedUser]: [...prev[selectedUser], newItem],
      }));
    }
    setModalVisible(false);
    setNewItemTitle('');
    setAddTarget(null);
  };

  const handleDelete = (item: any, type: 'shared' | 'individual') => {
    setDeleteTarget({ item, type });
    setDeleteModalVisible(true);
  };

  const confirmDelete = () => {
    if (!deleteTarget) return;
    if (deleteTarget.type === 'shared') {
      setSharedItems(prev => prev.filter(i => i.id !== deleteTarget.item.id));
    } else if (deleteTarget.type === 'individual') {
      setIndividualItems(prev => ({
        ...prev,
        [selectedUser]: prev[selectedUser].filter(i => i.id !== deleteTarget.item.id),
      }));
    }
    setDeleteModalVisible(false);
    setDeleteTarget(null);
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Header />

          <Text style={styles.listHeader}>Shared Bucket List</Text>
          <BucketSummary
            total={sharedItems.length}
            completed={sharedItems.filter(i => i.completed).length}
            onAdd={() => handleAdd('shared')}
          />
          <BucketList
            items={sharedItems}
            onToggle={toggleSharedItem}
            onDelete={item => handleDelete(item, 'shared')}
          />

          <View style={styles.individualHeader}>
            <Text style={styles.listHeader}>Individual Bucket List: </Text>
            <DropDownPicker
              open={open}
              value={selectedUser}
              items={items}
              setOpen={setOpen}
              setValue={setSelectedUser}
              style={styles.picker}
              textStyle={styles.pickerText}
              dropDownContainerStyle={styles.dropdownContainer}
              listItemLabelStyle={styles.pickerText}
              zIndex={1000}
            />
          </View>

          <BucketSummary
            total={personalItems.length}
            completed={personalItems.filter(i => i.completed).length}
            onAdd={() => handleAdd('individual')}
          />
          <BucketList
            items={personalItems}
            onToggle={toggleIndividualItem}
            onDelete={item => handleDelete(item, 'individual')}
          />

          {/* Modal for adding new item */}
          <Modal
            visible={modalVisible}
            transparent
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
              <View style={{ backgroundColor: '#fff', padding: 24, borderRadius: 12, width: 300 }}>
                <Text style={{ fontWeight: '700', fontSize: 18, marginBottom: 12 }}>Add New Bucket List Item</Text>
                <TextInput
                  placeholder="Enter item title"
                  value={newItemTitle}
                  onChangeText={setNewItemTitle}
                  style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 8, marginBottom: 16 }}
                />
                <Button title="Add" onPress={handleSubmitNewItem} />
                <Button title="Cancel" color="#999" onPress={() => setModalVisible(false)} />
              </View>
            </View>
          </Modal>

          {/* Modal for confirming delete */}
          <Modal
            visible={deleteModalVisible}
            transparent
            animationType="fade"
            onRequestClose={() => setDeleteModalVisible(false)}
          >
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
              <View style={{ backgroundColor: '#fff', padding: 24, borderRadius: 12, width: 300 }}>
                <Text style={{ fontWeight: '700', fontSize: 18, marginBottom: 12 }}>
                  Are you sure you want to delete "{deleteTarget?.item.title}"?
                </Text>
                <Button title="Delete" color="#FF4D4F" onPress={confirmDelete} />
                <Button title="Cancel" color="#999" onPress={() => setDeleteModalVisible(false)} />
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
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
  listHeader: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 8,
  },
  individualHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 8,
    zIndex: 1000,
  },
  picker: {
    height: 40,
    width: 100,
    backgroundColor: 'transparent',
    borderColor: '#000000',
    marginRight: 6,
  },
  pickerText: {
    fontSize: 14,
    fontWeight: '500',
  },
  dropdownContainer: {
    backgroundColor: '#FFEFE8',
    borderColor: '#000000',
  },
});