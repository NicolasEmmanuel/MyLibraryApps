import { StyleSheet, Text, View, Image } from 'react-native'
import { Button } from "@rneui/themed";
import React from 'react'
import { useDispatch } from 'react-redux'
import { addPanier } from '../../../redux/action'
import { styles } from '../theme/ecommerce/styles';

const ArticleCard = ({article}) => {

  //Répartie dans l'application.
  const dispatch = useDispatch();

  //Création de la fonction "ajouter".
  const ajouter =() => {
    
      dispatch(addPanier(article))
      console.log("ajouter")
  }

  return (
    <View style={styles.viewArticle}>

          <View style={styles.textDetailView}>

              <Text style={styles.detailNom}>{article.nom} </Text>
              <Text style={styles.detailPrix}>{article.prix} €</Text>

          </View>

          
          <View style={styles.imageContener} >

              <Image
                    style={styles.detailImage} 
                    source={{uri:article.image}}
                    /> 
          </View>
        
      
          <Text style={styles.detailDescription}>{article.description}</Text>
      
          <Button
            title="Ajouter au panier"
            onPress={ajouter}

            buttonStyle={{ backgroundColor: 'rgba( 222, 184, 135, 1 )' }}

            containerStyle={{
                      width: 200,
                      marginHorizontal: 50,
                      marginVertical: 10,
                      borderRadius:10,
                      alignSelf:'center', 
                            }}
          />

    </View>
  )
}

export default ArticleCard

