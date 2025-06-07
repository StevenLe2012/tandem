import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';

export default function MemoryUpload() {
  const { activity } = useLocalSearchParams();
  const router = useRouter();
  const [photo, setPhoto] = useState<string | null>(null);

  const handlePickPhoto = async () => {
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
        aspect: [4, 3],
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

  const removePhoto = () => {
    setPhoto(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Keep a memory</Text>
      <Text style={styles.subtitle}>Capture this moment with your group</Text>
      <View style={styles.photoContainer}>
        <TouchableOpacity style={styles.photoBox} onPress={handlePickPhoto}>
          {photo ? (
            <Image source={{ uri: photo }} style={styles.photo} />
          ) : (
            <FontAwesome name="camera" size={48} color="#6B6054" />
          )}
        </TouchableOpacity>
        {photo && (
          <TouchableOpacity style={styles.removeButton} onPress={removePhoto}>
            <FontAwesome name="times-circle" size={24} color="#FF4D4F" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.placeholder} />
      <Text style={styles.completedText}>
        You just completed: <Text style={{ fontWeight: 'bold' }}>{activity || 'a bucket list item'}</Text>.
      </Text>
      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.postButtonText}>Post Memory</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.skipText}>Skip for now</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF3EC',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 8,
    color: '#222',
  },
  subtitle: {
    fontSize: 16,
    color: '#6B6054',
    marginBottom: 24,
  },
  photoContainer: {
    position: 'relative',
    marginBottom: 24,
  },
  photoBox: {
    width: 200,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photo: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  removeButton: {
    position: 'absolute',
    top: -12,
    right: -12,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 4,
  },
  placeholder: {
    width: '90%',
    height: 48,
    backgroundColor: '#E5DED8',
    borderRadius: 16,
    marginBottom: 16,
  },
  completedText: {
    fontSize: 16,
    color: '#222',
    marginBottom: 16,
  },
  postButton: {
    backgroundColor: '#FFADAD',
    borderRadius: 20,
    paddingVertical: 12,
    paddingHorizontal: 40,
    marginBottom: 12,
  },
  postButtonText: {
    color: '#222',
    fontSize: 18,
    fontWeight: '700',
  },
  skipText: {
    color: '#222',
    fontSize: 16,
    marginTop: 8,
  },
}); 