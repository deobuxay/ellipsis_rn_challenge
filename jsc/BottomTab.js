import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Feather from "react-native-vector-icons/Feather";
import IonIcon from "react-native-vector-icons/Ionicons";
import HomeStack from './home/HomeStack';
import CartStack from './cart/CartStack';

const Tab = createBottomTabNavigator();

const PostAuth = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: "rgba(0,0,0,0.8)",
        tabBarInactiveTintColor: "rgba(0,0,0,0.5)",
        tabBarActiveBackgroundColor: "#fff",
        tabBarInactiveBackgroundColor: "#fffD",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          paddingBottom: 0,
          height: 60,
          alignItems: 'center'
        },
        tabBarLabelStyle: {
          fontSize: 14,
          fontFamily: "Arial"
        },
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "HomeStack") {
            if (focused) return <IonIcon name='ios-home' color='rgba(0,0,0,0.8)' size={24} />
            else return <IonIcon name='home' color="rgba(0,0,0,0.5)" size={24} />
          } else if (route.name === "CartStack") {
            if (focused) return <Feather name='shopping-cart' color="rgba(0,0,0,1)" size={24} />
            else return <Feather name='shopping-cart' color="rgba(0,0,0,0.5)" size={24} />
          }
        },
      })}
      backBehavior="initialRoute"
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ tabBarLabel: "Main" }}
      />
      <Tab.Screen
        name="CartStack"
        component={CartStack}
        options={{ tabBarLabel: "Orders" }}
      />
    </Tab.Navigator>
  );
};

export default PostAuth;
