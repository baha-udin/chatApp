import React, {useEffect, useState, useMemo} from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  ScrollView,
  Platform,
  useColorScheme,
} from 'react-native';
import {Colors, getData, resHeight, resWidth} from '../../utils';
import {
  HomeProfile,
  DoctorCategory,
  NewsItem,
  RatedDoctor,
} from './../../components';
import {Gap} from '../../components/atoms';
import {
  DummyDoctor10,
  DummyDoctor9,
  DummyDoctor8,
  JSONCategoryDoctor,
} from '../../assets';

const Doctors = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={8} />
          <HomeProfile onPress={() => navigation.navigate('UserProfile')} />
          <Gap height={resHeight(24)} />
          <Text style={styles.welcome}>
            Mau konsultasi dengan {'\n'}siapa hari ini?
          </Text>
          <Gap height={16} />
          <View style={styles.wrapperScroll}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.category}>
              <Gap width={16} />
              {JSONCategoryDoctor.data.map(item => {
                return (
                  <DoctorCategory
                    category={item.category}
                    key={item.id}
                    onPress={() => navigation.navigate('ChooseDoctor')}
                  />
                );
              })}
              <Gap width={6} />
            </ScrollView>
          </View>
          <Gap height={28} />
          <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
          <Gap height={16} />
          <RatedDoctor
            name="Alexa Rachel"
            desc="Dentist"
            avatar={DummyDoctor10}
            onPress={() => navigation.navigate('DoctorProfile')}
          />
          <RatedDoctor
            name="Sunny Frank"
            desc="Dentist"
            avatar={DummyDoctor9}
            onPress={() => navigation.navigate('DoctorProfile')}
          />
          <RatedDoctor
            name="Poe Min"
            desc="Dentist"
            avatar={DummyDoctor8}
            onPress={() => navigation.navigate('DoctorProfile')}
          />
          <Gap height={16} />
          <Text style={styles.sectionLabel}>Good News</Text>
          <NewsItem />
          <NewsItem />
          <NewsItem />
        </ScrollView>
      </View>
    </View>
  );
};

export default Doctors;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.secondary,
    flex: 1,
  },
  content: {
    paddingHorizontal: resWidth(16),
    paddingTop: Platform.OS === 'android' ? resHeight(20) : resHeight(32),
    backgroundColor: 'white',
    flex: 1,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  welcome: {
    fontSize: resWidth(20),
    fontWeight: '500',
    color: Colors.text.primary,
    letterSpacing: 0.2,
  },
  wrapperScroll: {
    marginLeft: resWidth(-16),
  },
  category: {
    maxHeight: resHeight(100),
  },
  sectionLabel: {
    fontSize: resWidth(16),
    fontWeight: '500',
    color: Colors.text.primary,
    letterSpacing: 0.3,
  },
});
