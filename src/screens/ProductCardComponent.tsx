import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {Product} from '../types';

type Props = {
  product: Product;
  navigation: any;
};

const ProductCardComponent = (props: Props) => {
  const {image, title, price, description} = props.product || {};
  const onPress = () => {
    props.navigation.navigate('ProductDetailsScreen', {
      image,
      title,
      price,
      description,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <Text>{title}</Text>
      <Text>{price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: 'column',
    padding: 10,
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default ProductCardComponent;
