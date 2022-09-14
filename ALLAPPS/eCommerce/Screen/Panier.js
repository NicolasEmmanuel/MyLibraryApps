import { StyleSheet, Text, View, FlatList, Image, } from 'react-native'
import { Button } from "@rneui/themed";
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removePanier, removeOnePanier } from '../../../redux/action'
import { styles } from '../theme/ecommerce/styles';


const PanierItem = ({item}) => {

  const dispatch = useDispatch()

  //Supprimer "1" article.
  const removeOne = () =>{
    dispatch(removeOnePanier(item))
  }

  return(
    <View style={styles.contentPanier}>

          <Image
                style={styles.imagePanier} 
                source={{uri:item.image}}
          />

          <View style={styles.cardPanier}>
              <Text style={styles.nomPanier} >{item.nom}</Text>
              <Text style={styles.prixPanier}>{item.prix} €</Text>

              <Button
                styles={styles.removeOne}
                onPress={removeOne}
                title='Supprimer'

                    buttonStyle={{ backgroundColor: 'rgb(221,184,146)' }}

                    containerStyle={{
                              width: 100,
                              marginHorizontal: 170,
                              marginVertical:20,
                             
                              borderRadius:10,
                              alignSelf:'center', 
                                     }}
                />

          </View>
              
    </View>
  )
}

const Panier = () => {

  const dispatch = useDispatch()
  
  //Verification de l'état des data de panier
  const {dataPanier} = useSelector(state=>state)
        console.log("data Panier :", dataPanier )

        

const remove =() =>{
      dispatch(removePanier());//Je vide mon panier
              console.log('remove', remove)
}

  return (
    <View>
      
      <FlatList
                data={dataPanier}
                renderItem = {({item}) => <PanierItem item = {item} />}
                keyExtractor = {item => item.id}
      />

       <Button
            title="Vider le panier"
            onPress={remove}

            buttonStyle={{ backgroundColor: 'rgb(156,102,68)' }}

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

export default Panier

