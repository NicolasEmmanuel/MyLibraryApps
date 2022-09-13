import { StyleSheet, Text, View, FlatList, Image, } from 'react-native'
import { Button } from "@rneui/themed";
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

        <View style={styles.cardPanier}>
            <Text style={styles.nomPanier} >{item.nom}</Text>
            <Text style={styles.prixPanier}>{item.prix} €</Text>

            <Image
                  style={styles.image} 
                  source={{uri:item.image}}
            />

        </View>

        

          

          <Button
                styles={styles.removeOne}
                onPress={removeOne}
                title='Supprimer'

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

export default Panier

const styles = StyleSheet.create({

  contentPanier:{
    width:'100%',
    height:400,
    backgroundColor:'#fff',
    padding:5,
    margin:5,
    flexDirection:'row',
  },

  cardPanier:{
    
  },

  image:{
    height:100,
    width:100,
  }
})