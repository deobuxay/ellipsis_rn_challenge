import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Header from '../components/header';
import ProductDetail from './ProductDetail';

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home}
        options={{
          header: () => (<Header title='Product List' />)
        }} />
      <Stack.Screen name="ProductDetail" component={ProductDetail}
        options={{
          header: ({ navigation, route }) => {
            const { selectedProduct } = route.params;
            return (<Header title={selectedProduct ? selectedProduct.name : 'Product'} goBack={() => navigation.pop()} />);
          }
        }} />
    </Stack.Navigator>
  );
};


export default HomeStack;
