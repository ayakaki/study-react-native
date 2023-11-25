import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { ListItem } from '../components/ListItem';
import { API_ENDPOINT } from '../constants';
import { MyArticleListType } from '../types';
import { MyArticleType } from '../types/myArticleType';

export const HomeScreen = ({ navigation }) => {
  const [articleList, setArticleList] = useState<MyArticleType[]>([]);

  const fetchArticleList = async () => {
    const endpoint = API_ENDPOINT.NEWS;
    try {
      const res: AxiosResponse<MyArticleListType> = await axios.get(endpoint);
      const articleListRes = res.data.articles;
      setArticleList(articleListRes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchArticleList();
  }, []);

  const onPress = (article: MyArticleType) => {
    const routeParams = { article };
    navigation.navigate('Article', routeParams);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <FlatList
          data={articleList}
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
