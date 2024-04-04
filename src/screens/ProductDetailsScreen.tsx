import React from 'react';
import {Image, StyleSheet, Text, ScrollView} from 'react-native';

const ProductDetailsScreen = ({route}: any) => {
  const {image, title, price, description} = route.params || {};
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentStyle}>
      <Image style={styles.image} source={{uri: image}} />
      <Text>{title}</Text>
      <Text>{price}</Text>
      <Text>{description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  contentStyle: {
    alignItems: 'center',
  },
  image: {
    height: 100,
    width: 100,
  },
});

export default ProductDetailsScreen;
