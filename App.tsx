import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { ClipScreen } from './screens/ClipScreen';
import { tabIconOption } from './settings/tabIconOption';
import { HomeTab } from './tabs/HomeTab';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={tabIconOption}>
        <Tab.Screen name="Home" component={HomeTab} options={{ headerShown: false }} />
        <Tab.Screen name="Clip" component={ClipScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
