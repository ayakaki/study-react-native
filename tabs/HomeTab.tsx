import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ArticleScreen } from '../screens/ArticleScreen';
import { HomeScreen } from '../screens/HomeScreen';

export const HomeTab = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: true }} />
      <Stack.Screen name="Article" component={ArticleScreen} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
};
