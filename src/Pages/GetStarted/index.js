import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {colors, resHeight, resWidth} from '../../utils';
import {ILGetStarted, ILLogo} from '../../assets/illustration';
import ButtonNav from '../../components/atoms/ButtonNav';
import Gap from './../../components/atoms/Gap';

const GetStarted = ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={ILGetStarted}
        resizeMode="cover"
        style={styles.ImageBackground}>
        <View style={styles.container}>
          <ILLogo />
          <Text style={styles.title}>
            Konsultasi dengan{'\n'}dokter jadi lebih{'\n'}mudah & fleksibel
          </Text>
        </View>
        <View style={styles.wrapButton}>
          <ButtonNav
            title="Get Started"
            onPress={() => navigation.navigate('Register')}
            type="primary"
          />
          <Gap height={resHeight(8)} />
          <ButtonNav
            title="Log in"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
      </ImageBackground>
    </>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  wrapPage: {
    backgroundColor: 'white',
    flex: 1,
  },
  wrapButton: {
    paddingBottom: resHeight(40),
    paddingHorizontal: resWidth(20),
  },
  ImageBackground: {
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    paddingTop: resHeight(40),
    paddingHorizontal: resHeight(20),
    justifyContent: 'flex-start',
    paddingBottom: resHeight(20),
  },
  title: {
    marginTop: resHeight(90),
    color: 'white',
    fontSize: 28,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
});
