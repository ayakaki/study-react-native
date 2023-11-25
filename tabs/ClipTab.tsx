import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArticleScreen } from '../screens/ArticleScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { ClipScreen } from '../screens/ClipScreen';

export const ClipTab = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Clip" component={ClipScreen} options={{ headerShown: true }} />
      <Stack.Screen name="Article" component={ArticleScreen} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
};
