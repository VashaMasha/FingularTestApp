import React, {useState, useEffect} from 'react';
import {Alert, FlatList, StyleSheet} from 'react-native';
import {Product} from '../types';
import api from '../api';
import ProductCardComponent from './ProductCardComponent';

const ProductsListScreen = ({navigation}: any) => {
  const [data, setData] = useState<Product[]>([]);

  useEffect(() => {
    api
      .getProductsList()
      .then(res => {
        setData(res.data);
      })
      .catch(() => {
        Alert.alert('Somethimg went wrong');
      });
  }, []);

  return (
    <FlatList
      data={data}
      renderItem={({item}) => <ProductCardComponent product={item} navigation={navigation}/>}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ProductsListScreen;