import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

type Props = {
  isClipped: boolean;
  onPress: () => void;
};

export const ClipButton = (props: Props) => {
  const iconName = props.isClipped ? 'bookmark' : 'bookmark-o';

  return (
    <TouchableOpacity onPress={props.onPress}>
      <FontAwesome name={iconName} size={40} color="gray" />
    </TouchableOpacity>
  );
};
