import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

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
      <Text>This is Article Screen</Text>
      <Text>{routeParams.article.title}</Text>
    </SafeAreaView>
  );
};
