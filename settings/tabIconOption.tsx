import { Entypo, FontAwesome } from '@expo/vector-icons';

export const tabIconOption = ({ route }) => ({
  tabBarIcon: ({ color, size }) => {
    if (route.name === 'HomeTab') {
      return <Entypo name="home" size={size} color={color} />;
    } else if (route.name === 'ClipTab') {
      return <FontAwesome name="bookmark" size={size} color={color} />;
    }
  },
});
