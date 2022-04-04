import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DummyHospital1} from '../../../assets';
import {Colors, resHeight, resWidth} from '../../../utils';

const ListHospital = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyHospital1} style={styles.image} />
      <View style={styles.wrapTitle}>
        <Text style={styles.name}>Rumah Sakit Citra Bunga Merdeka</Text>
        <Text style={styles.location}>Jln. Surya Sejahtera 20</Text>
      </View>
    </View>
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
