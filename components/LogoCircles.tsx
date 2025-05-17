import { View } from 'react-native';

export default function LogoCircles() {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: 90, justifyContent: 'center' }}>
      <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#FFB6C1', margin: 2 }} />
      <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#87CEEB', margin: 2 }} />
      <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#FFFFE0', margin: 2 }} />
      <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#E6E6FA', margin: 2 }} />
      <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#98FB98', margin: 2 }} />
      <View style={{ width: 30, height: 30, borderRadius: 15, backgroundColor: '#ADD8E6', margin: 2 }} />
    </View>
  );
} 