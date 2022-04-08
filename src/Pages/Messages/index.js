import React, {useState} from 'react';
import {StyleSheet, Text, View, Platform, ScrollView} from 'react-native';
import {DummyDoctor4, DummyDoctor5, DummyDoctor6} from '../../assets';
import {Gap, List} from '../../components';
import {Colors, resHeight, resWidth} from '../../utils';

const Messages = () => {
  const [Doctors, setDoctors] = useState([
    {
      id: 1,
      profilePicture: DummyDoctor4,
      name: 'Jennie',
      desc: 'Baik, terima kasih at...',
    },
    {
      id: 2,
      profilePicture: DummyDoctor5,
      name: 'Jessica',
      desc: 'Oke, nanti saya sam...',
    },
    {
      id: 3,
      profilePicture: DummyDoctor6,
      name: 'Chris Angkasa',
      desc: 'Noted, ...',
    },
  ]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Messages</Text>
        <ScrollView
          style={styles.wrapList}
          showsVerticalScrollIndicator={false}>
          {Doctors.map(Doctor => {
            return (
              <List
                key={Doctor.id}
                profilePicture={Doctor.profilePicture}
                name={Doctor.name}
                desc={Doctor.desc}
              />
            );
          })}
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
    paddingTop: Platform.OS === 'android' ? 10 : resHeight(32),
    paddingHorizontal: resWidth(16),
    backgroundColor: 'white',
    flex: 1,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
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
