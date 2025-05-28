import React from 'react';

import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {Colors} from '../colors';

const Button = () => {
  return (
    <TouchableOpacity activeOpacity={0.8} style={styles.buttonbox}>
      <Text style={styles.botton}>Signup</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  botton: {
    paddingTop: 14,
    paddingBottom: 9,
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
