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
import {Colors, resHeight, resWidth, storeData, getData} from '../../utils';
import {UseForm} from '../../utils/';
import {showMessage, hideMessage} from 'react-native-flash-message';
import {authentication, database} from '../../Config/Fire';
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {ref, set} from 'firebase/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
    console.log(form);
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
            uid: success.user.uid,
          };
          // push data register to firebase
          set(ref(database, 'users/' + success.user.uid + '/'), {
            data,
          });
          // save data to AsyncStorage
          // 'user' as key, & data as value
          storeData('user', data);

          navigation.navigate('UploadPhoto', data);
          console.log('register success', success);
          setForm('reset');
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
      <Gap height={resHeight(8)} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <KeyboardAvoidingView>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={value => setForm('fullName', value)}
            />
            <Gap height={resHeight(10)} />
            <Input
              label="Call Name"
              value={form.callName}
              onChangeText={value => setForm('callName', value)}
            />
            <Gap height={resHeight(10)} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={value => setForm('profession', value)}
            />
            <Gap height={resHeight(10)} />
            <Input
              label="Email Address"
              value={form.email}
              onChangeText={value => setForm('email', value)}
              secureTextEntry={false}
            />
            <Gap height={resHeight(10)} />
            <Input
              label="Password"
              secureTextEntry={true}
              value={form.password}
              onChangeText={value => setForm('password', value)}
            />
            <Gap height={resHeight(20)} />
            <ButtonNav type="primary" title={text} onPress={onRegister} />
            <Gap height={resHeight(20)} />
            <Link
              title="Do you have an Account? Login here"
              align="center"
              size={resWidth(14)}
              onPress={() => navigation.navigate('Login')}
            />
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
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
