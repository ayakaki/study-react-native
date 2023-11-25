import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { ListItem } from '../components/ListItem';
import { MyArticleType } from '../types/myArticleType';

export const ClipScreen = ({ navigation }) => {
  const clips = useSelector((state) => state.user.clips);

  const onPress = (article: MyArticleType) => {
    const routeParams = { article };
    navigation.navigate('Article', routeParams);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={clips}
          renderItem={({ item }) => (
            <ListItem
              urlToImage={item.urlToImage}
              title={item.title}
              author={item.author}
              publishedAt={item.publishedAt}
              onPress={() => onPress(item)}
            />
          )}
          keyExtractor={(_, index) => index.toString()}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  scrollView: {
    width: '100%',
  },
});
