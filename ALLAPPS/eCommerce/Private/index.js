import { View, Text } from 'react-native'
import React from 'react'
import { Button } from "@rneui/themed";
import auth from '@react-native-firebase/auth';

import Commande from '../Components/commande';

const index = () => {


  return (
    <View>
      <Text>Mon compte</Text>

      <Button 
          title="Déconnexion" 
          type="clear"
          onPress={()=>
                  auth()
                .signOut()
                .then(() => console.log('User signed out!'))}
         />

         <Commande/>

         
    </View>
  )
}

export default index