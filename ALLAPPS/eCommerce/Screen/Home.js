import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Categories from '../Components/Categories';
import Articles from '../Components/Articles';

const Home = () => {
  return (
    <View style={styles.content}>
      <Categories style={styles.categorieTitle}/>
      <Articles />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor:'#f6f4f1',
    margin: 10,
  },

  


});
