import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../colors';
const Login = () => {
  return (
    <SafeAreaView style={styles.contaner}>
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
              style={styles.input}
              placeholder="Example@Example.com"
              placeholderTextColor={Colors.fonts}
            />
          </View>
          <View style={{gap: 10, marginTop: 22}}>
            <Text style={styles.formlabel}>PassWord</Text>
            <TextInput
              style={styles.input}
              placeholder="**********"
              placeholderTextColor={Colors.fonts}
            />
          </View>
        </View>

    </SafeAreaView>
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
    marginTop: 76,
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
  },
});
