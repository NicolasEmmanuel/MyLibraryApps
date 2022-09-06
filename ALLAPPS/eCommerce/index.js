import React , {useContext, useEffect} from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* Creation d'une bottomNavigation */
import Home from './Screen/Home';
import Setting from './Screen/Setting';

import {FirebaseContext} from '../../firebaseContext'

/* Creation d'une bottomNavigation */
const Tab = createBottomTabNavigator();


const App = () =>{

 const firebase = useContext(FirebaseContext)
console.log(firebase)



 const initCategories = async () => {


  const categories = await firebase.getCategories() 

  if (!categories.empty){
    console.log("pas vide")

    categories.foreach( categorieData =>{
      console.log("first" , categorieData.data())
    })
  }


 }

 useEffect(()=>{
  initCategories()
 },[])

  return (

/* Creation d'une bottomNavigation */
      <Tab.Navigator screenOptions={{headerShown:false}}>
          <Tab.Screen name="Acceuil" component={Home} />
          <Tab.Screen name="Compte" component={Setting} />
      </Tab.Navigator>
    
  );
}

export default App ;
