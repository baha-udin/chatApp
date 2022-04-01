import React from 'react';
import {StyleSheet, StatusBar, useColorScheme, Text, View} from 'react-native';
import {Header} from './../../components/molecules';
import {Input, Gap, ButtonNav} from './../../components/atoms';
import {resHeight, resWidth} from '../../utils';

const Register = ({navigation}) => {
  const isDark = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <Header onPressBack={() => navigation.navigate('GetStarted')} />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={resHeight(24)} />
        <Input label="Pekerjaan" />
        <Gap height={resHeight(24)} />
        <Input label="Email Address" />
        <Gap height={resHeight(24)} />
        <Input label="Password" secureTextEntry={true} />
        <Gap height={resHeight(24)} />
        <ButtonNav
          type="primary"
          title="Register"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingTop: resHeight(25),
    paddingHorizontal: resWidth(20),
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    paddingTop: resHeight(40),
  },
});
