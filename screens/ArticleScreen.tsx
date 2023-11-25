import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { WebView } from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export const ArticleScreen = ({ route }) => {
  const routeParams = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <WebView
        source={{ uri: routeParams.article.url }}
        startInLoadingState={true}
        renderLoading={() => <Text>Loading...</Text>}
      />
    </SafeAreaView>
  );
};
