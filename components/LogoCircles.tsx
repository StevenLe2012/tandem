import { View } from 'react-native';

export default function LogoCircles() {
  return (
    <View style={{ alignItems: 'center' }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#FFB6C1', margin: 4 }} />
        <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#87CEEB', margin: 4 }} />
        <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#FFFFE0', margin: 4 }} />
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#E6E6FA', margin: 4 }} />
        <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#98FB98', margin: 4 }} />
        <View style={{ width: 40, height: 40, borderRadius: 20, backgroundColor: '#ADD8E6', margin: 4 }} />
      </View>
    </View>
  );
} 