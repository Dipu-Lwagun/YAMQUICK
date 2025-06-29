import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Signup from '../screens/Signup';
import TabNavigation from './tabNavigation';
import Firstscreen from '../screens/Firstscreen';
import {RecommendScreen} from '../screens';
import IsCart from '../screens/MealScreen/IsCart';
import Cart from '../screens/Carts/Cart';
import Menu from '../screens/menu';
import ConfirmOrder from '../screens/Carts/ConfirmOrder';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {/* <Stack.Screen
          name="firstpage"
          component={Login}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="home"
          component={Home}
          options={{headerShown: false}}
        /> */}

        <Stack.Screen name="Tabs" component={TabNavigation} />
        <Stack.Screen name="IsCart" component={IsCart} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Recommend" component={RecommendScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
