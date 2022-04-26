import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import {Header} from './../../components/molecules';
import {Input, Gap, ButtonNav, Link} from './../../components/atoms';
import {Colors, resHeight, resWidth} from '../../utils';
import {UseForm} from '../../utils/';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {authentication, database} from '../../Config/Fire';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {ref, set} from 'firebase/database';

const Register = ({navigation}) => {
  const [form, setForm] = UseForm({
    fullName: '',
    callName: '',
    profession: '',
    email: '',
    password: '',
  });
  const [text, setText] = useState('Register');
  const [isSignedIn, setIsSignedIn] = useState(false);

  const onRegister = () => {
    if (
      form.fullName === '' ||
      form.callName === '' ||
      form.profession === '' ||
      form.email === '' ||
      form.password === ''
    ) {
      showMessage({
        message: 'data masih ada yang kosong',
        type: 'default',
        Color: 'white',
        backgroundColor: Colors.error,
      });
      navigation.navigate('Register');
    } else {
      setText('Sedang memproses...');
      createUserWithEmailAndPassword(authentication, form.email, form.password)
        .then(success => {
          const data = {
            fullName: form.fullName,
            callName: form.callName,
            profession: form.profession,
            email: form.email,
          };
          set(ref(database, 'users/' + success.user.uid + '/'), {
            data,
          });
          console.log('register success', success);
          setForm('reset');
          navigation.replace('UploadPhoto');
        })
        .catch(error => {
          const errorMessage = error.message;
          showMessage({
            message: 'Email sudah terdaftar, yuk langsung Login',
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
        <KeyboardAvoidingView>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={value => setForm('fullName', value)}
            />
            <Gap height={resHeight(16)} />
            <Input
              label="Call Name"
              value={form.callName}
              onChangeText={value => setForm('callName', value)}
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
              secureTextEntry={false}
            />
            <Gap height={resHeight(16)} />
            <Input
              label="Password"
              secureTextEntry={true}
              value={form.password}
              onChangeText={value => setForm('password', value)}
            />
            <Gap height={resHeight(16)} />
            <ButtonNav type="primary" title={text} onPress={onRegister} />
            <Gap height={resHeight(30)} />
            <Link
              title="Do you have an Account? Login here"
              align="center"
              size={resWidth(16)}
              underline="underline"
              onPress={() => navigation.navigate('Login')}
            />
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? resHeight(0) : resHeight(25),
    paddingBottom: Platform.OS === 'android' ? resHeight(50) : resHeight(0),
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    paddingHorizontal: resWidth(20),
  },
});
