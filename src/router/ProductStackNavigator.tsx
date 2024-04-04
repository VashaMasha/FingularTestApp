import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ProductsListScreen from '../screens/ProductsListScreen';

const Stack = createNativeStackNavigator();

const ProductStackNavigator = (): React.JSX.Element => (
  <Stack.Navigator initialRouteName="ProductsListScreen">
    <Stack.Screen
      name="ProductsListScreen"
      component={ProductsListScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="ProductDetailsScreen"
      component={ProductDetailsScreen}
    />
  </Stack.Navigator>
);

export default ProductStackNavigator;
