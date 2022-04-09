import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {resWidth, resHeight, Colors, Fonts} from '../../../../utils';

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
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginBottom: 20,
    paddingRight: 16,
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
    fontFamily: Fonts.primary[400],
    color: Colors.text.primary,
    letterSpacing: 0.3,
  },
  date: {
    fontSize: 11,
    fontFamily: Fonts.primary[500],
    color: Colors.text.secondary,
    marginTop: 6,
  },
});
