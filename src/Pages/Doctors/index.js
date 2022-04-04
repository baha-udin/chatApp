import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  StatusBar,
  ScrollView,
  Platform,
} from 'react-native';
import {Colors, resHeight, resWidth} from '../../utils';
import {
  HomeProfile,
  DoctorCategory,
  NewsItem,
  RatedDoctor,
} from './../../components';
import {Gap} from '../../components/atoms';

const Doctors = () => {
  const isDark = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <StatusBar
          barStyle={isDark ? 'light-content' : 'dark-content'}
          backgroundColor={Colors.white}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <HomeProfile />
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
              <DoctorCategory />
              <DoctorCategory />
              <DoctorCategory />
              <DoctorCategory />
              <Gap width={6} />
            </ScrollView>
          </View>
          <Gap height={28} />
          <Text style={styles.sectionLabel}>Top Rated Doctors</Text>
          <Gap height={16} />
          <RatedDoctor />
          <RatedDoctor />
          <RatedDoctor />
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
    paddingTop: Platform.OS === 'android' ? 0 : resHeight(32),
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
  category: {
    maxHeight: resHeight(100),
  },
  wrapperScroll: {
    marginLeft: resWidth(-16),
  },
  sectionLabel: {
    fontSize: resWidth(16),
    fontWeight: '500',
    color: Colors.text.primary,
    letterSpacing: 0.3,
  },
});
