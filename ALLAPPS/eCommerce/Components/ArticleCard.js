import { StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { addPanier } from '../../../redux/action'

const ArticleCard = ({article}) => {

  //Répartie dans l'application.
  const dispatch = useDispatch();

  //Création de la fonction "ajouter".
  const ajouter =() => {
    
      dispatch(addPanier(article))
      console.log("ajouter")
  }

  return (
    <View>
      <Text>{article.nom} </Text>

      <Button
        title="Ajouter au panier"
        onPress={ajouter} 
      />

    </View>
  )
}

export default ArticleCard

const styles = StyleSheet.create({})