import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof FontAwesome.glyphMap = 'circle';

          switch (route.name) {
            case 'explore':
              iconName = 'compass';
              break;
            case 'bucket':
              iconName = 'archive';
              break;
            case 'friends':
              iconName = 'users';
              break;
            case 'profile':
              iconName = 'user';
              break;
          }

          return <FontAwesome name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="explore" options={{ title: 'Explore' }} />
      <Tabs.Screen name="bucket" options={{ title: 'Bucket' }} />
      <Tabs.Screen name="friends" options={{ title: 'Friends' }} />
      <Tabs.Screen name="profile" options={{ title: 'Profile' }} />
    </Tabs>
  );
}
