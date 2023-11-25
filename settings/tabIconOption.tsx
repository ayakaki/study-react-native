import { Entypo, FontAwesome } from '@expo/vector-icons';

export const tabIconOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    if (route.name === 'Home') {
      return <Entypo name="home" size={size} color={color} />;
    } else if (route.name === 'Clip') {
      return <FontAwesome name="bookmark" size={size} color={color} />;
    }
  },
});
