import { View, Text, StyleSheet, TouchableOpacity, TextInput, Linking, Image } from 'react-native';
import Colors from '../../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

export default function ProfileScreen() {
  const [name, setName] = useState('Raghad');
  const [email, setEmail] = useState('raghad@email.com');
  const [instagram, setInstagram] = useState('raghad_insta');
  const [photo, setPhoto] = useState(null); // Placeholder for image URI
  const friendGroupCode = 'ABC123'; // Placeholder

  const handlePickPhoto = () => {
    // TODO: Implement image picker
    alert('Image picker not implemented');
  };

  const handleInstagramPress = () => {
    if (instagram) {
      Linking.openURL(`https://instagram.com/${instagram.replace('@', '')}`);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.avatarContainer} onPress={handlePickPhoto}>
        {photo ? (
          <Image source={{ uri: photo }} style={styles.avatarCircle} />
        ) : (
          <View style={styles.avatarCircle}>
            <FontAwesome name="user" size={64} color="#FFADAD" />
          </View>
        )}
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
          <Text style={styles.editProfileText}>Edit Profile Picture</Text>
          <FontAwesome name="pencil" size={16} color="#6B6054" style={{ marginLeft: 6 }} />
        </View>
      </TouchableOpacity>
      <View style={styles.infoRow}>
        <Text style={styles.label}>First Name</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="First Name"
        />
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
        />
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Instagram</Text>
        <TextInput
          style={[styles.input, { flex: 1 }]}
          value={instagram}
          onChangeText={setInstagram}
          placeholder="Instagram"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TouchableOpacity onPress={handleInstagramPress} style={styles.igButton}>
          <FontAwesome name="external-link" size={18} color="#6B6054" />
        </TouchableOpacity>
      </View>
      <View style={styles.infoRow}>
        <Text style={styles.label}>Your Friend Group Code</Text>
        <Text style={styles.code}>{friendGroupCode}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
    padding: 24,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FFEFE8',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 4,
  },
  editProfileText: {
    fontSize: 15,
    color: '#6B6054',
    fontWeight: '500',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 16,
    color: '#222',
    width: 120,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 12,
    fontSize: 16,
    color: '#222',
    flex: 1,
    marginLeft: 8,
  },
  igButton: {
    marginLeft: 8,
    padding: 6,
    backgroundColor: '#E5DED8',
    borderRadius: 8,
  },
  code: {
    fontSize: 16,
    color: '#6B6054',
    fontWeight: 'bold',
    marginLeft: 8,
    backgroundColor: '#E5DED8',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
}); 