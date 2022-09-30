import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React, { useEffect } from 'react'

import { Button, ListItem  } from "@rneui/themed";

import { useSelector, useDispatch } from 'react-redux'
import { removePanier, removeOnePanier } from '../../../redux/action'

import firestore from '@react-native-firebase/firestore';

import PanierItem from '../Components/PanierItem';

import moment from 'moment';//Création du format de date aaaa/mm/jj

import { styles as ecommercestyles } from '../theme/ecommerce/styles';

const Panier = () => {

      //Lecture de l'état des data 
      const {dataPanier , dataUser} = useSelector(state=>state)

      const [montantTotal, setmontantTotal] = React.useState()

            console.log("data Panier :", dataPanier )
    
      const dispatch = useDispatch()

      const remove =() =>{
      dispatch(removePanier());//Je vide mon panier
              console.log('remove', remove)
}

/* Action pour calculer la somme des articles du panier */
const totalPanier = () => {

  let total = 0
  dataPanier.forEach(element => 
    {

    total = total + (Number(element.prix) * element.quantite )/* Boucle sur les 'prix' du tableau "dataPanier" */
    
    });

    setmontantTotal(total)
}

      const addCommande = async () =>{
            console.log("addCommande")

        const commandeValue = {
                          etat  :  false,
                          total :  montantTotal,
                          uid   :  dataUser.uid,
                          date  :  moment (new Date()) . format() //creer format date aaaa/mm/jj avec 'moment'
        }

        console.log("dataUser.uid" , dataUser.uid)

        const commande = await firestore().collection("commande").add(commandeValue)//Ajouter les informations dans Firebase // création de ma commande

        await dataPanier.map( async  element=>{

          await firestore().collection("commande") .doc(commande.id) //Ajouter le contenue de ma commande
                            .collection("Detail") .add(element) //Ajout de la sous-collection "Detail" dans rebrique "commande"

        })  

        remove()
        
      }

      useEffect(()=>{ /* "useEffect": Apelle de mon action "totalPanier" */
        totalPanier();
      },[dataPanier])/**/



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
                  <Text style={styles.prixItemPanier}>{montantTotal} €</Text>
              </View>

              <View style={styles.bottomAcheter}>
              
                    <Button
                        title="payer"
                        onPress={addCommande}

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