import React from 'react';
import {StyleSheet, Text, View, Platform, ScrollView} from 'react-native';
import {Gap, ListDoctor} from '../../components';
import {Colors, resHeight, resWidth} from '../../utils';

const Messages = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>

        <ScrollView style={styles.wrapList}>
          <ListDoctor />
          <ListDoctor />
          <ListDoctor />
          <ListDoctor />
          <ListDoctor />
          <ListDoctor />
          <ListDoctor />
          <ListDoctor />
        </ScrollView>
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
    paddingTop: Platform.OS === 'android' ? 0 : resHeight(32),
    paddingHorizontal: resWidth(16),
    backgroundColor: 'white',
    flex: 1,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    borderColor: Colors.white,
  },
  title: {
    fontSize: resWidth(20),
    fontWeight: '600',
    color: Colors.text.primary,
    letterSpacing: 0.3,
  },
  wrapList: {
    marginLeft: resWidth(-16),
  },
});
