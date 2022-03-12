import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Cart from './Cart';
import Header from '../components/header';

const Stack = createStackNavigator();

function CartStack() {
  return (
    <Stack.Navigator
      initialRouteName="CartHome"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="CartHome" component={Cart} options={() => {
        return {
          header: () => (<Header title='My orders' />),
          headerShown: true
        }
      }} />
    </Stack.Navigator>
  );
};


export default CartStack;
