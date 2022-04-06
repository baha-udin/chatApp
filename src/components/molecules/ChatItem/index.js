import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors, resHeight, resWidth} from '../../../utils';
import IsMe from './IsMe';
import Other from './Other';

const ChatItem = ({isMe}) => {
  if (isMe === true) {
    return <IsMe />;
  }
  return <Other />;
};

export default ChatItem;
