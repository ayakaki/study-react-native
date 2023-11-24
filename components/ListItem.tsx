import { Image, StyleSheet, Text, View } from 'react-native';

type Props = {
  author: string;
  title: string;
  urlToImage: string;
  publishedAt: string;
};

export const ListItem = (props: Props) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.leftContainer}>
        <Image style={{ width: 100, height: 100 }} source={{ uri: props.urlToImage }} />
      </View>
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.text}>
          {props.title}
        </Text>
        <Text style={styles.subText}>{props.author}</Text>
        <Text style={styles.subText}>{props.publishedAt}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 100,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    marginVertical: 5,
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  text: {
    fontSize: 16,
  },
  subText: {
    fontSize: 12,
    color: '#888',
  },
});