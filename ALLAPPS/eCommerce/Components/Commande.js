import { StyleSheet, Text, View, Flatlist } from 'react-native'
import React from 'react'

import { ListItem, Icon } from "@rneui/themed";

import  firebase from '@react-native-firebase/firestore';


const Commande = () => {

    const [dataCommande , setDatacommande] = React.useState([{id:1, total:"10"}])

    React.useEffect(()=>{

        firebase().collection("Commande").limit(10).onSnapshot(snapShot=>{//Lister les 10 premières "commandes" avec "snapShot" 
            console.log('snapShot' , snapShot )

            if(!snapShot.empty){ //Si snapShot n'est pas vide
                snapShot.docs.forEach((commandeUser=>{// boucle sur les 'docs'

                    console.log(commandeUser.id)
                    setDatacommande([...dataCommande, {
                        id:commandeUser.id,
                        ...commandeUser.data()
                    }])

                })) 
                
                
            }
        })

    },[])

    const itemCommande = ({item}) =>{
        return( 
                <ListItem  bottomDivider>
                    
                    <Icon name='av-timer' />
                    
                        <ListItem.Content>
                    
                            <ListItem.Title>{item.total} € </ListItem.Title>
                    
                        </ListItem.Content>
                    
                    <ListItem.Chevron />
                
                </ListItem>
            )
    }

  return (

    <View>
      <Text>Commande </Text>

      <Flatlist
        data={dataCommande}
        renderItem={ ({item}) => <itemCommande item = {item} />}
        keyExtractor={item=>item.id}
      
      />

    </View>
  )
}

export default Commande

const styles = StyleSheet.create({})