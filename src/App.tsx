import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './router';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};
export default App;


/*

Shopping App

Create a two-page application.

The first page is a list of products. The product list consists of cards. The product card should have an image, a title, and a price. When clicking on a product card, it navigates to the product details page.

The product details page has an image of the product at the top, followed by the product title, price, and product description.

API to use: GET single product: https://fakestoreapi.com/products/(id)

GET list of products: https://fakestoreapi.com/products/

*/