import { View, Text, StyleSheet, TouchableOpacity, TextInput, Linking, Image, Alert } from 'react-native';
import Colors from '../../../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const [name, setName] = useState('Steven');
  const [email, setEmail] = useState('stevenle@stanford.com');
  const [instagram, setInstagram] = useState('stevenle1337');
  const [photo, setPhoto] = useState<string | null>(null);
  const friendGroupCode = 'ABC123';
  const router = useRouter();

  const handlePickPhoto = () => {
    Alert.alert(
      'Choose Photo Source',
      'Where would you like to get your photo from?',
      [
        {
          text: 'Camera',
          onPress: () => pickImage('camera'),
        },
        {
          text: 'Photo Library',
          onPress: () => pickImage('library'),
        },
        {
          text: 'Cancel',
          style: 'cancel',
        },
      ]
    );
  };

  const pickImage = async (source: 'camera' | 'library') => {
    try {
      const permission = source === 'camera'
        ? await ImagePicker.requestCameraPermissionsAsync()
        : await ImagePicker.requestMediaLibraryPermissionsAsync();

      if (!permission.granted) {
        Alert.alert('Permission Required', 'Please grant permission to access your photos/camera');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled) {
        setPhoto(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking image:', error);
      Alert.alert('Error', 'Failed to pick image');
    }
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
      <TouchableOpacity style={styles.termsButton} onPress={() => router.push('/tabs/profile/terms')}>
        <Text style={styles.termsButtonText}>View Terms and Conditions</Text>
      </TouchableOpacity>
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
  termsButton: {
    backgroundColor: '#FFEFE8',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignSelf: 'center',
    marginTop: 24,
  },
  termsButtonText: {
    color: '#6B6054',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
}); 