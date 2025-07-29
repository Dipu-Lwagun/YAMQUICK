import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../colors';
import {Container} from '../components';
import {useDispatch} from 'react-redux';
import {login} from '../redux/features/AuthSlice';
import {IcFacebook, IcFingerprint, IcGoogle} from '../assets/image';
import {useNavigation} from '@react-navigation/native';
import Signup from './Signup';
import Forgetpassword from './Forgetpassword';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //hook
  const dispatch = useDispatch();

  //function
  const handlingLogin = () => {
    const params = {
      username: email,
      password: password,
    };
    console.warn('params:', params);
    dispatch(login(params));
  };
  const navigation = useNavigation();

  const signup = () => {
    navigation.navigate('Signup');
  };
  const forgetpassword = () => {
    navigation.navigate('Forgetpassword');
  };
  return (
    <ScrollView style={styles.contaner}>
      <Text style={styles.headtext}>Log in</Text>

      <View style={styles.formcontaner}>
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.context}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
        </Text>
        <View style={{gap: 10, marginTop: 46}}>
          <Text style={styles.formlabel}>Email or Mobile Number</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholder="Example@Example.com"
            placeholderTextColor={Colors.fonts}
          />
        </View>
        <View style={{gap: 10, marginTop: 22}}>
          <Text style={styles.formlabel}>PassWord</Text>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="**********"
            placeholderTextColor={Colors.fonts}
            secureTextEntry
          />
        </View>
        <TouchableOpacity onPress={forgetpassword}>
          <Text style={styles.forgetpsw}>forget Password</Text>
        </TouchableOpacity>
        <Container marginTop={50}>
          <TouchableOpacity onPress={handlingLogin} style={styles.loginbtm}>
            <Text
              style={{
                textAlign: 'center',
                color: Colors.whitefont,
                fontWeight: 500,
                fontSize: 18,
              }}>
              Login
            </Text>
          </TouchableOpacity>
        </Container>
        <Text style={{textAlign: 'center', marginTop: 29}}>
          or sign up with
        </Text>
        <Container
          style={{
            flexDirection: 'row',
            gap: 8,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 7,
          }}>
          <TouchableOpacity>
            <Image source={IcGoogle} style={{height: 34, width: 34}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={IcFacebook} style={{height: 34, width: 34}} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={IcFingerprint} style={{height: 34, width: 34}} />
          </TouchableOpacity>
        </Container>
        <Container
          style={{
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: 14, color: Colors.fonts, fontWeight: 400}}>
            Don’t have an account?
          </Text>
          <TouchableOpacity onPress={signup}>
            <Text style={{fontSize: 14, color: Colors.orange, fontWeight: 400}}>
              {' '}
              Sign Up
            </Text>
          </TouchableOpacity>
        </Container>
      </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: Colors.yellow,
  },
  headtext: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: '900',
    marginTop: 46,
    color: Colors.whitefont,
  },
  formcontaner: {
    flex: 1,
    backgroundColor: Colors.whitebg,
    padding: 35,
    borderTopStartRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 61,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.fonts,
  },
  context: {
    fontSize: 12,
    paddingTop: 19,
  },
  formlabel: {
    fontSize: 20,
    color: Colors.fonts,
    fontWeight: '500',
  },
  input: {
    backgroundColor: Colors.yellow2,
    paddingHorizontal: 15,
    borderRadius: 13,
    color: Colors.fonts,
  },
  loginbtm: {
    backgroundColor: Colors.orange,
    marginHorizontal: 70,
    padding: 10,
    borderRadius: 20,
  },
  forgetpsw: {
    color: Colors.orange,
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'right',
    marginTop: 20,
  },
});
