import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {FirebaseContext} from '../../../firebaseContext';
import {loadOptions} from '@babel/core';
import ArticleCard from '../Components/ArticleCard';

//Requête Si "pas d'article".
const NoArticle = () => {
  return <Text>Il n'y a pas d'articles dans cette catégorie.</Text>;
};

const DetailArticle = ({route}) => {

  //Récupération de l'id de l'article
  const {id} = route.params;

        const [article, setArticle] = useState(null);
        const [loading, setLoading] = useState(false);
        const firebase = useContext(FirebaseContext);

  const getArticle = async () => {
    //Chargement avant la requête
    setLoading(true);

    //Récupération des données depuis firebase.
    const rqArticle = await firebase.getArticleById(id);

    //"setTimeout" = 
    setTimeout(()=>{
      setArticle({id: id , ...rqArticle.data()});
      setLoading(false);
    },500)

    console.log(rqArticle.data());
    
  };

  useEffect(() => {
    getArticle();
  }, []);

  console.log('id', id);

  return (
    //Code de vérication du "loading".
    <View >
          {  loading == true ? <ActivityIndicator/> //Si "loading" = true "?alors" afficher "ActivityActivator"
            : article == null ?  <NoArticle/> //':Sinon' article est égal à "null" "?alors" charger la const "NoArticle"
            :   <ArticleCard article={article}/> 
          }
          
    </View>
  );
};

export default DetailArticle;

const styles = StyleSheet.create({});
