import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PostAuth from './BottomTab';
import AuthStack from './auth/AuthStack';

const Stack = createStackNavigator();

function Application() {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={AuthStack} />
      <Stack.Screen name="PostAuth" component={PostAuth} />
    </Stack.Navigator>
  );
}

export default Application;
