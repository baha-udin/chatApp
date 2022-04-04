import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, resHeight, resWidth} from '../../utils';

const Messages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Ini Halaman Messages</Text>
      </View>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    flex: 1,
  },
  content: {
    paddingHorizontal: resWidth(16),
    paddingVertical: resHeight(32),
    backgroundColor: 'white',
    flex: 1,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderColor: Colors.white,
  },
});
