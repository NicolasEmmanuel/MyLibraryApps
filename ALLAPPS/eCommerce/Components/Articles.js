import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';


const RenderArticle = ({article}) => {
  //navigation DetailArticle
  const navigation = useNavigation();

  const onPressArticle = () => {
    navigation.navigate('DetailArticle', {id: article.id});
  };

  //Pour récupérer les données nécessaires à l’affichage
  useSelector(state => state);

  return (
    <TouchableOpacity onPress={onPressArticle} style={styles.touchArticle}>

                        <Text style={styles.nomArticle}>{article.nom}</Text>
                        <Image
                            style={styles.imageArticle} 
                            source={{uri:article.image}}
                        />
                        <Text style={styles.prixArticle}>{article.prix}€</Text>
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
    backgroundColor: '#d19e78',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    height: 200,
    width: 180,
  },

  nomArticle: {
    fontSize: 18,
    color: '#fbe9d3',
    fontWeight: '500',
    marginBottom:5,
  },

  prixArticle: {
    fontSize: 18,
    color: '#fbe9d3',
    fontWeight: '500',
    marginTop:5,
  },

  imageArticle: {
    width: 155,
    height: 120,
  },


});
