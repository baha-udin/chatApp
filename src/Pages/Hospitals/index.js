import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, resHeight, resWidth} from '../../utils';

const Hospitals = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Ini Halaman Hospitals</Text>
      </View>
    </View>
  );
};

export default Hospitals;

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
