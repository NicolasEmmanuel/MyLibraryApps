import { View, Text } from 'react-native'
import React from 'react'

//Création de la navigation des pages
import { createNativeStackNavigator } from '@react-navigation/native-stack'

//Importation des pages 'public'.
import Connexion from './Connexion'
import Inscription from './Inscription'

//Création de la navigation des pages
const Tab = createNativeStackNavigator()

const Public = () => {
  return (

    //Création de la navigation des pages
   <Tab.Navigator screenOptions={{headerShown:false}}>

        <Tab.Screen name = 'Connexion' component = {Connexion} />
        <Tab.Screen name = 'Inscription' component = {Inscription} />
        
   </Tab.Navigator>
  )
}

export default Public