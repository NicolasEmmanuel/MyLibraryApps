import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removePanier, removeOnePanier } from '../../../redux/action'


const PanierItem = ({item}) => {

  const dispatch = useDispatch()

  //Supprimer "1" article.
  const removeOne = () =>{
    dispatch(removeOnePanier(item))
  }

  return(
    <View style={styles.contentPanier}>
        <Text style={styles.nom} >{item.nom}</Text>
            <Image
                  style={styles.image} 
                  source={{uri:item.image}}
            />

          <Text style={styles.prix}>{item.prix} €</Text>

          <Button
                styles={styles.removeOne}
                onPress={removeOne}
                title='Supprimer'
          />
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
            title="Vider"
            onPress={remove}
        />


    </View>
  )
}

export default Panier

const styles = StyleSheet.create({

  contentPanier:{
    width:'100%',
    height:200,
    backgroundColor:'red',
    padding:5,
    margin:5,
    borderRadius:10,
  },

  image:{
    height:100,
    width:100,
  }
})