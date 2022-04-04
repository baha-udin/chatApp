import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {DummyNews1} from '../../../assets';
import {Colors, resHeight, resWidth} from '../../../utils';

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.date}>Today</Text>
      </View>
      <Image source={DummyNews1} style={styles.image} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    paddingBottom: resHeight(10),
    paddingTop: resHeight(16),
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    fontSize: resWidth(16),
    fontWeight: '600',
    color: Colors.text.primary,
  },
  date: {
    fontSize: resWidth(12),
    color: Colors.text.secondary,
    fontWeight: '400',
    marginTop: 4,
  },
  image: {
    width: resWidth(80),
    height: resHeight(60),
    borderRadius: 12,
  },
});
