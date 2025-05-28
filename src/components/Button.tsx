import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors} from '../colors';

const Button = () => {
  return (
    <View>
      <TouchableOpacity activeOpacity={0.7} style={styles.buttonbox}>
        <Text style={styles.botton}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  botton: {
    paddingTop:14,
    paddingBottom:9,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '500',
    color: Colors.orange,
  },
  buttonbox: {
    width: 207,
    height: 55,
    backgroundColor: Colors.yellow2,
    borderRadius: 30,
  },
});
