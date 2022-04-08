import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {
  DummyDoctor2,
  IconEditProfile,
  IconHelp,
  IconLanguage,
  IconNext,
  IconRate,
} from '../../../assets';
import {Colors, resHeight, resWidth} from '../../../utils';

const List = ({profilePicture, name, desc, type, onPress, icon}) => {
  const Icon = () => {
    if (icon === 'edit-profile') {
      return <IconEditProfile />;
    }
    if (icon === 'language') {
      return <IconLanguage />;
    }
    if (icon === 'rate') {
      return <IconRate />;
    }
    if (icon === 'help') {
      return <IconHelp />;
    }
    return <IconEditProfile />;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        {icon ? (
          <Icon style={styles.icon} />
        ) : (
          <Image source={profilePicture} style={styles.image} />
        )}
        <View style={styles.wrapTitle}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
        {type === 'next' && <IconNext />}
      </View>
    </TouchableOpacity>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: resHeight(10),
    paddingHorizontal: resWidth(16),
    borderBottomWidth: 1,
    borderBottomColor: Colors.border,
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  image: {
    width: 46,
    height: 46,
    borderRadius: 50,
  },
  wrapTitle: {
    marginLeft: resWidth(12),
    justifyContent: 'center',
    flex: 1,
  },
  name: {
    fontSize: resWidth(16),
    fontWeight: '600',
    letterSpacing: 0.3,
    color: Colors.text.primary,
  },
  desc: {
    fontSize: resWidth(12),
    color: Colors.text.secondary,
    fontWeight: '300',
  },
});
