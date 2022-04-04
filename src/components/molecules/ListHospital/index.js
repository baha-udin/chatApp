import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {Colors, resHeight, resWidth} from '../../../utils';

const ListHospital = ({picture, name, address}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={picture} style={styles.image} />
      <View style={styles.wrapTitle}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.location}>{address}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: resHeight(10),
    borderBottomColor: Colors.border,
    borderBottomWidth: 1,
  },
  image: {
    borderRadius: 20,
    width: resWidth(80),
    height: resHeight(60),
    resizeMode: 'cover',
  },
  wrapTitle: {
    marginLeft: resWidth(16),
    flex: 1,
  },
  name: {
    fontSize: resWidth(16),
    color: Colors.text.primary,
    fontWeight: '500',
  },
  location: {
    marginTop: resHeight(6),
    color: Colors.text.secondary,
    fontSize: resWidth(12),
    fontWeight: '300',
  },
});
