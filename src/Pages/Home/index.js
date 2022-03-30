import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  SafeAreaView,
  useColorScheme,
  StatusBar,
} from 'react-native';

const Home = () => {
  const isDark = useColorScheme() == 'dark';

  return (
    <SafeAreaView style={styles.wrapPage}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-contentc'} />
      <Text>Ini halaman Home</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapPage: {
    backgroundColor: 'white',
    flex: 1,
  },
});
