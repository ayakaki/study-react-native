import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { ClipScreen } from './screens/ClipScreen';
import { HomeTab } from './tabs/HomeTab';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeTab} options={{ headerShown: false }} />
        <Tab.Screen name="Clip" component={ClipScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
