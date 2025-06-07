import { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/entry/login');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/images/splash-icon.png')}
        style={styles.circles}
        resizeMode="contain"
      />
      <Text style={styles.title}>Tandem</Text>
      <Text style={styles.tagline}>
        Your way of making the most of college with friends.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF3EC',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  circles: {
    width: 160,
    height: 90,
    marginBottom: 32,
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    fontFamily: 'Inter',
    marginBottom: 16,
    color: '#000',
  },
  tagline: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#000',
  },
});