import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import { useDispatch, useSelector } from 'react-redux';
import { ClipButton } from '../components/ClipButton';
import { addClip, deleteClip } from '../store/userSlice';
import { MyArticleType } from '../types/myArticleType';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export const ArticleScreen = ({ route }) => {
  const article: MyArticleType = route.params.article;
  const dispatch = useDispatch();
  const clips = useSelector((state) => state.user.clips);
  const isClipped = clips.some((clip: MyArticleType) => clip.urlToImage === article.urlToImage);

  const onPressClip = () => {
    if (isClipped) {
      dispatch(deleteClip(article));
      return;
    }
    dispatch(addClip(article));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ClipButton isClipped={isClipped} onPress={onPressClip} />
      <WebView
        source={{ uri: article.url }}
        startInLoadingState={true}
        renderLoading={() => <Text>Loading...</Text>}
      />
    </SafeAreaView>
  );
};
