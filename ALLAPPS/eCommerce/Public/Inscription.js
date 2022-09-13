import { View, Text } from 'react-native'
import React from 'react'
import { Button } from "@rneui/themed";
import { Input, Icon } from "@rneui/themed";

import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

//configuration de la navigation 
import { useNavigation } from '@react-navigation/native'
import { styles } from '../theme/ecommerce/styles';



const Inscription = () => {

  const navigation = useNavigation()

  //Création de la navigation vers "Inscription"
  const returnToConnexion = () =>{
    navigation.navigate("Connexion")
  }

  return (
    <View style={styles.inscriptionView} >

      <Text style={styles.textInscription}>Inscription</Text>

      <Input
          placeholder='Votre e-mail'
          leftIcon={
                    <Icon
                      name='alternate-email'
                      size={15}
                      color='black'
                    />
      }
    />

      <Input
          placeholder='Mot de passe '
          secureTextEntry={true}
          leftIcon={
                    <Icon
                      name='lock-outline'
                      size={15}
                      color='black'
                    />
      }
          rightIcon={
                    <Icon
                      name='md-eye-outline
                      '
                      size={15}
                      color='black'
                    />
      }
    />

      <Button 
          title="Connexion" 
          type="clear"
          onPress={returnToConnexion} />


    </View>
  )
}

export default Inscription