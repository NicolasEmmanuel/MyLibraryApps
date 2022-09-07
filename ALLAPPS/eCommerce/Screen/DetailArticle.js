import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import {FirebaseContext} from '../../../firebaseContext';

const DetailArticle = ({route}) => {

  //Récupération de l'id de l'article
  const {id} = route.params;
  const [article, setArticle] = useState();
  const firebase = useContext(FirebaseContext);

  const getArticle = async () => {
    const rqArticle = await firebase.getArticleById(id);
  };

  useEffect(() => {
    getArticle();
  }, []);

  console.log('id', id);

  return (
    <View>
      <Text>DetailArticle</Text>
    </View>
  );
};

export default DetailArticle;

const styles = StyleSheet.create({});
