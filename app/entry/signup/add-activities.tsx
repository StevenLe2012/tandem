import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';

const defaultActivities = [
  'Pull an all-nighter together',
  'Sit in on a random class',
  'Host a dinner in a dorm kitchen',
  'Take a 24-hour group trip',
  'Take graduation photos in a weird outfit',
];

export default function AddActivitiesScreen() {
  const [selected, setSelected] = useState<string[]>([]);
  const [customActivities, setCustomActivities] = useState<string[]>([]);
  const [adding, setAdding] = useState(false);
  const [newActivity, setNewActivity] = useState('');

  const toggleSelect = (activity: string) => {
    setSelected((prev) =>
      prev.includes(activity)
        ? prev.filter((a) => a !== activity)
        : [...prev, activity]
    );
  };

  const handleAddCustom = () => {
    if (newActivity.trim()) {
      setCustomActivities([...customActivities, newActivity.trim()]);
      setNewActivity('');
      setAdding(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get started with a{"\n"}few ideas</Text>
      <Text style={styles.subtitle}>
        Pick some activities to add to your{"\n"}group list - or write your own,
      </Text>
      <View style={{ marginBottom: 24 }}>
        {[...defaultActivities, ...customActivities].map((activity, idx) => (
          <TouchableOpacity
            key={activity + idx}
            style={styles.activityRow}
            onPress={() => toggleSelect(activity)}
            activeOpacity={0.7}
          >
            <View style={[styles.circle, selected.includes(activity) && styles.circleSelected]} />
            <Text style={styles.activityText}>{activity}</Text>
          </TouchableOpacity>
        ))}
        {adding ? (
          <View style={styles.addRow}>
            <TextInput
              style={styles.input}
              value={newActivity}
              onChangeText={setNewActivity}
              placeholder="Your activity"
              placeholderTextColor="#6B6054"
              onSubmitEditing={handleAddCustom}
              autoFocus
            />
            <TouchableOpacity onPress={handleAddCustom}>
              <Text style={styles.addButton}>Add</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.addRow} onPress={() => setAdding(true)}>
            <Text style={styles.plus}>+</Text>
            <Text style={styles.addCustomText}>Add your own activity</Text>
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Add Selected & Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF3EC',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#222',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#222',
    marginBottom: 32,
  },
  activityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#CFC6BE',
    backgroundColor: '#E5DED8',
    marginRight: 16,
  },
  circleSelected: {
    backgroundColor: '#FFB6B6',
    borderColor: '#FFB6B6',
  },
  activityText: {
    fontSize: 17,
    color: '#222',
  },
  addRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  plus: {
    fontSize: 24,
    color: '#222',
    marginRight: 10,
    fontWeight: '700',
  },
  addCustomText: {
    fontSize: 17,
    color: '#222',
  },
  input: {
    backgroundColor: '#E5DED8',
    borderRadius: 12,
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#222',
    flex: 1,
    marginRight: 10,
  },
  addButton: {
    color: '#FFB6B6',
    fontWeight: '700',
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: '#FFB6B6',
    borderRadius: 20,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 24,
  },
  continueButtonText: {
    color: '#222',
    fontSize: 18,
    fontWeight: '700',
  },
}); 