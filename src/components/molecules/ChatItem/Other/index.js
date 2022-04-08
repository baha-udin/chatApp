import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyDoctor9} from '../../../../assets';
import {resWidth, resHeight, Colors} from '../../../../utils';

const Other = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyDoctor9} style={styles.profile} />
      <View>
        <View style={styles.chatContent}>
          <Text style={styles.chat}>
            Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
          </Text>
        </View>
        <Text style={styles.date}>4.20 AM</Text>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: resHeight(16),
    flexDirection: 'row',
    alignItems: 'flex-end ',
    paddingLeft: resWidth(12),
  },
  chatContent: {
    padding: 12,
    paddingRight: 18,
    backgroundColor: Colors.primary,
    maxWidth: '80%',
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  chat: {
    fontSize: 14,
    color: Colors.white,
    fontWeight: '400',
  },
  date: {
    color: Colors.text.subTitle,
    fontSize: 11,
    marginTop: 8,
  },
  profile: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 12,
  },
});
