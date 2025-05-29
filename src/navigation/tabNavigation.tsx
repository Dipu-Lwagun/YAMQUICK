import {StyleSheet, Image, ImageSourcePropType} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Menu from '../screens/menu';
import Favorites from '../screens/favorites';
import Help from '../screens/help';
import {icon} from '../icon';
import {Colors} from '../colors';
import order from '../screens/order';

type TabIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const Tab = createBottomTabNavigator();

const TabNavigation: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor: Colors.orange},
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({focused}: TabIconProps) => (
            <Image
              source={icon.home as ImageSourcePropType}
              style={styles.iconimg}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Menu"
        component={Menu}
        options={{
          title: 'Menu',
          tabBarIcon: ({focused}: TabIconProps) => (
            <Image
              source={icon.Manu as ImageSourcePropType}
              style={styles.iconimg}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Favorites}
        options={{
          title: 'Favorites',
          tabBarIcon: ({focused}: TabIconProps) => (
            <Image
              source={icon.Favorite as ImageSourcePropType}
              style={styles.iconimg}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Order"
        component={order}
        options={{
          title: 'Order',
          tabBarIcon: ({focused}: TabIconProps) => (
            <Image
              source={icon.Order as ImageSourcePropType}
              style={styles.iconimg}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Help"
        component={Help}
        options={{
          title: 'Help',
          tabBarIcon: ({focused}: TabIconProps) => (
            <Image
              source={icon.Help as ImageSourcePropType}
              style={styles.iconimg}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  iconimg: {
    height: 21,
    width: 31,
    resizeMode: 'contain',
  },
});
