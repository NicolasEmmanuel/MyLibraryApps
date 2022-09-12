import {StyleSheet, Text, View, FlatList, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import { styles } from '../theme/ecommerce/styles';


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

                      <Image
                            style={styles.imageArticle} 
                            source={{uri:article.image}}
                        />    
                        
                        <Text style={styles.nomArticle}>{article.nom}</Text>
                        
                        <Text style={styles.prixArticle}>{article.prix}€</Text>
    </TouchableOpacity>
  );
};

const Articles = () => {
  const {dataArticle} = useSelector(state => state);

  console.log('reducer : ', dataArticle);

  return (
    <View style={styles.content}>
      <Text style={styles.articleTitle}>Articles</Text>

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


