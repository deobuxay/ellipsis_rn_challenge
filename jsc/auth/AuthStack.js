import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};


export default AuthStack;
