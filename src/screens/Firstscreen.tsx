import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Colors} from '../colors';
import Button from '../components/Button';

const Firstscreen = (props:any) => {
  return (
    <SafeAreaView style={styles.contaner}>
      <View style={styles.imagecont}>
        <Image
          source={require('../assets/image/logo/yellow_logo.png')}
          style={styles.logo}
        />
        <Text style={styles.des}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </Text>
        <View style={styles.buttoncont}>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.botton} onPress={()=>props.navigation.navigate("Login")}>Login</Text>
          </TouchableOpacity>
          <Button onPress={()=>props.navigation.navigate("Login")} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Firstscreen;

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
    backgroundColor: Colors.orange,
  },
  imagecont: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    // height:257,
    // width:202
  },
  des: {
    fontWeight: 500,
    fontSize: 14,
    color: Colors.whitefont,
    textAlign: 'center',
    paddingHorizontal: 48,
    paddingTop: 26,
  },
  botton: {
    backgroundColor: Colors.yellow,
    paddingHorizontal: 73,
    paddingTop: 14,
    paddingBottom: 9,
    fontSize: 24,
    fontWeight: '500',
    borderRadius: 30,
    color: Colors.orange,
  },
  buttoncont:{
    gap:6,
    marginTop:47
  }
});
