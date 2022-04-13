import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Alert,
  ScrollView,
  View,
  Platform,
} from 'react-native';
import {Header} from './../../components/molecules';
import {Input, Gap, ButtonNav, Link} from './../../components/atoms';
import {Colors, resHeight, resWidth} from '../../utils';
import {UseForm} from '../../utils/';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import App from '../../Config/Fire';
import {showMessage, hideMessage} from 'react-native-flash-message';

const Register = ({navigation}) => {
  const [form, setForm] = UseForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });
  const [text, setText] = useState('Register');

  const onContinue = () => {
    if (
      form.fullName === '' ||
      form.profession === '' ||
      form.email === '' ||
      form.password === ''
    ) {
      showMessage({
        message: 'Pastikan semua data sudah terisi',
        type: 'default',
        Color: 'white',
        backgroundColor: Colors.error,
      });
      navigation.navigate('Register');
    } else {
      setText('Sedang memproses...');
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, form.email, form.password)
        .then(success => {
          console.log('Register success ', success);
          navigation.replace('MainApp');
          setForm('');
        })
        .catch(error => {
          const errorMessage = error.message;
          showMessage({
            message: 'Email sudah terdaftar, silahkan pilih login',
            type: 'default',
            Color: 'white',
            backgroundColor: Colors.error,
          });
          setText('Register');
        });
    }
  };

  return (
    <View style={styles.container}>
      <Header
        onPress={() => navigation.navigate('GetStarted')}
        title="Daftar Akun"
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
          <ButtonNav type="primary" title={text} onPress={onContinue} />
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
