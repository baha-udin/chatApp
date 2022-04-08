import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';
import {Colors, resHeight} from '../../utils';
import {Header, ChatItem, InputChat} from './../../components';

const Chatting = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header
        type="dark-profile"
        title="Naira Putri Hayza"
        onPress={() => navigation.navigate('MainApp', {screen: 'Doctors'})}
      />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
        <ChatItem isMe />
        <ChatItem Other />
        <ChatItem isMe />
      </View>
      <View>
        <InputChat />
      </View>
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  container: {
    paddingVertical: Platform.OS === 'ios' ? resHeight(30) : resHeight(0),
    flex: 1,
    backgroundColor: 'white',
  },

  chatDate: {
    fontSize: 11,
    color: Colors.text.subTitle,
    textAlign: 'center',
    fontWeight: '400',
    marginVertical: resHeight(20),
  },
  content: {
    flex: 1,
  },
});
