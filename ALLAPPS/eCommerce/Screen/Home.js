import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Categories from '../Components/Categories';
import Articles from '../Components/Articles';
import { styles } from '../theme/ecommerce/styles';

const Home = () => {
  return (
    <View style={styles.content}>
      <Categories style={styles.categorieTitle}/>
      <Articles />
    </View>
  );
};

export default Home;


