import React, {useState} from 'react';
import {StyleSheet, Text, ScrollView, View, Platform} from 'react-native';
import {Header} from './../../components/molecules';
import {Input, Gap, ButtonNav, Link} from './../../components/atoms';
import {resHeight, resWidth} from '../../utils';
import {UseForm} from '../../utils/';

const Register = ({navigation}) => {
  // const [fullName, setFullName] = useState('');
  // const [profession, setProfession] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  const [form, setForm] = UseForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const onContinue = () => {
    console.warn(form.profession);
  };

  return (
    <View style={styles.container}>
      <Header
        onPress={() => navigation.navigate('GetStarted')}
        title="Register"
      />
      <Gap height={resHeight(16)} />
      <View style={styles.content}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Input
            label="Full Name"
            value={form.fullName}
            onChangeText={value => setForm('fullName', value)}
          />
          <Gap height={resHeight(16)} />
          <Input
            label="Pekerjaan"
            value={form.profession}
            onChangeText={value => setForm('profession', value)}
          />
          <Gap height={resHeight(16)} />
          <Input
            label="Email Address"
            value={form.email}
            onChangeText={value => setForm('email', value)}
          />
          <Gap height={resHeight(16)} />
          <Input
            label="Password"
            secureTextEntry={true}
            value={form.password}
            onChangeText={value => setForm('password', value)}
          />
          <Gap height={resHeight(16)} />
          <ButtonNav type="primary" title="Register" onPress={onContinue} />
          <Gap height={resHeight(30)} />
          <Link
            title="Do you have an Account? Login here"
            align="center"
            size={resWidth(16)}
            underline="underline"
            onPress={() => navigation.navigate('Login')}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? resHeight(8) : resHeight(25),
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    paddingHorizontal: resWidth(20),
  },
});
