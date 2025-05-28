import { View, Text } from 'react-native'
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Firstscreen from '../screens/Firstscreen';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import TabNavigation from './tabNavigation';
import Home from '../screens/home';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
     <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="firstpage"
          component={Firstscreen}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}
        /> */}
        
        <Stack.Screen
          name="Home"
          component={TabNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigation