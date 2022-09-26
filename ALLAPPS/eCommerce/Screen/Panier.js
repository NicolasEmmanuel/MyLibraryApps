import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'

import { Button, ListItem  } from "@rneui/themed";

import { useSelector, useDispatch } from 'react-redux'
import { removePanier, removeOnePanier } from '../../../redux/action'

import PanierItem from '../Components/PanierItem';

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
    <View style={styles.container}>
      <FlatList
                data={dataPanier}
                renderItem = {({item}) => <PanierItem item = {item} />}
                keyExtractor = {item => item.id}
      />


            {/* Footer panier */}   
            <View style={styles.bottom}>

              <View style={styles.bottomPrix}>
                  <Text>Prix</Text>
              </View>

              <View style={styles.bottomAcheter}>
              
                    <Button
                        title="payer"
                        /* onPress={} */

                        buttonStyle={{ backgroundColor: 'rgb(56,176,0)' }}

                        containerStyle={{
                              width: 100,
                              marginHorizontal: 50,
                              marginVertical: 10,
                              borderRadius:20,
                              alignSelf:'center', 
                          }}
                      />
              </View>
             
            </View>
            {/* Footer panier */} 

    </View>
  )
}

export default Panier

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'orange',
    justifyContent:'space-between',
  },

  bottom:{
    flexDirection:'row',
    height:100,
    backgroundColor:'purple',
  },

  bottomPrix:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
  },

  bottomAcheter:{
    flex:1,
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
  },
})