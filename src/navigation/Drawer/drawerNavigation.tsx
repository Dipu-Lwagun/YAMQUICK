import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Home from '../../screens/home';
import Notification from './Notification';
import CartDower from './CartDower';
import Profile from './Profile';
import TabNavigation from '../tabNavigation';
import {Colors} from '../../colors';
import CustomeDrawer from './CustomeDrawer';
import Order from '../../screens/order';

const Drawer = createDrawerNavigator<drawerType>();

type drawerType = {
  Home: undefined;
};
const drawerNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerContentStyle: {backgroundColor: Colors.orange},
      }}
      drawerContent={props => <CustomeDrawer {...props} />}>
      <Drawer.Screen name="Tabs" component={TabNavigation} />
      <Drawer.Screen name="profile" component={Profile} />
      <Drawer.Screen name="order" component={Order} />
      <Drawer.Screen name="Notification" component={Notification} />
      <Drawer.Screen name="cart" component={CartDower} />
    </Drawer.Navigator>
  );
};

export default drawerNavigation;

const styles = StyleSheet.create({});
