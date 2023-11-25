import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import * as React from 'react';
import { Provider } from 'react-redux';
import { tabIconOption } from './settings/tabIconOption';
import { store } from './store';
import { ClipTab, HomeTab } from './tabs';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={tabIconOption}>
          <Tab.Screen name="HomeTab" component={HomeTab} options={{ headerShown: false }} />
          <Tab.Screen name="ClipTab" component={ClipTab} options={{ headerShown: false }} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
