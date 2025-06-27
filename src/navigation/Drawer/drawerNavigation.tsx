import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/home';
import Notification from './Notification';
import CartDower from './CartDower';
import Profile from './Profile';

const Drawer = createDrawerNavigator<drawerType>();

type drawerType = {
  Home: undefined;
};
const drawerNavigation = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="cart" component={CartDower} />
      <Drawer.Screen name="profile" component={Profile} />
    </Drawer.Navigator>
  );
};

export default drawerNavigation;

const styles = StyleSheet.create({});
