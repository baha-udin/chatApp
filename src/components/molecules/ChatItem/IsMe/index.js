import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {resWidth, resHeight, Colors} from '../../../../utils';

const IsMe = () => {
  return (
    <View style={styles.container}>
      <View style={styles.chatContent}>
        <Text style={styles.chat}>
          Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
        </Text>
      </View>
      <Text style={styles.date}>4.20 AM</Text>
    </View>
  );
};

export default IsMe;

const styles = StyleSheet.create({
  container: {
    marginBottom: resHeight(16),
    paddingRight: resWidth(12),
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: Colors.cardLight,
    maxWidth: '70%',
    borderRadius: 10,
    borderBottomRightRadius: 0,
  },
  chat: {
    fontSize: 14,
    color: Colors.text.primary,
    fontWeight: '400',
  },
  date: {
    color: Colors.text.subTitle,
    fontSize: 11,
    marginTop: 8,
  },
});
