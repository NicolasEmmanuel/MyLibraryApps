import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

const RenderArticle = ({article}) => {
  //navigation DetailArticle
  const navigation = useNavigation();

  const onPressArticle = () => {
    navigation.navigate('DetailArticle', {id: article.id});
  };

  useSelector(state => state);

  return (
    <TouchableOpacity onPress={onPressArticle} style={styles.touchArticle}>
      <Text style={styles.textArticle}>{article.nom}</Text>
    </TouchableOpacity>
  );
};

const Articles = () => {
  const {dataArticle} = useSelector(state => state);

  console.log('reducer : ', dataArticle);

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Articles</Text>

      <FlatList
        data={dataArticle}
        horizontal={false}
        numColumns={2}
        renderItem={({item}) => <RenderArticle article={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Articles;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },

  title: {
    fontSize: 25,
    //color:'white',
    fontWeight: '600',
  },

  touchArticle: {
    backgroundColor: 'red',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    height: 200,
    width: 180,
  },

  textArticle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
  },
});
