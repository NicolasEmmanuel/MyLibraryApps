import React, {useContext, useEffect} from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


/* Importation des screen pour la création d'une bottomNavigation. */
import Home from './Screen/Home';
import Setting from './Screen/Setting';
import DetailArticle from './Screen/DetailArticle';
import Panier from './Screen/Panier';


import {FirebaseContext} from '../../firebaseContext';

import {useDispatch} from 'react-redux';

import {addCategorie} from '../../redux/action';
import {addArticle} from '../../redux/action';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'


/* Creation d'une bottomNavigation */
const Tab = createBottomTabNavigator();

    //Navigation entre les vues.
    const stack = createNativeStackNavigator();
          const Acceuil = () =>{
            return(
              <stack.Navigator screenOptions={{headerShown: false}}>
                  <stack.Screen name = 'Acceuil' component = {Home} />
                  <stack.Screen name = 'DetailArticle' component = {DetailArticle} />
              </stack.Navigator>
            )
          }
 

const App = () => {
  
    //useDispatch:envoie des actions redux.
    const dispatch = useDispatch();

    //useContext : Accepte un objet contexte, et renvoie la valeur actuelle du contexte. Celle-ci est déterminée par la prop value du plus proche.
    const firebase = useContext(FirebaseContext);

  //Initialisation des Catégorie.
  const initCategories = async () => {
    const categories = await firebase.getCategories();
      console.log(categories.empty);

        if (!categories.empty) {
          console.log('pas vide');

          categories.forEach(categorieData => {
            const tempCategorie = {id: categorieData.id,...categorieData.data(), //autre écriture = " nom : categorieData.data().nom "
            };

          console.log('first', tempCategorie);
        dispatch(addCategorie(tempCategorie));
      });
}
  };

//Initialisation des Articles.
  const initArticles = async () => {
    const articles = await firebase.getArticles();
      console.log(articles.empty);

        if (!articles.empty) {
          console.log('pas vide');

          articles.forEach(articleData => {
            const tempArticle = {id: articleData.id,...articleData.data(), //autre écriture = " nom : categorieData.data().nom "
            };

         console.log('first', tempArticle);
        dispatch(addArticle(tempArticle));
      });
    }
  };


  //useEffect :Accepte une fonction qui contient du code impératif, pouvant éventuellement produire des effets.
  useEffect(() => {
      initCategories();
      initArticles();
    }, []);

  
  return (
    /* Creation d'une bottomNavigation */
    <Tab.Navigator screenOptions={{headerShown: false}}>

        <Tab.Screen name="Home" 
                    component={Acceuil} 
                    options={{
                      tabBarIcon: () => (
                       <MaterialIcon
                              name='home'
                              size={19}
                       />
                      ),
                    }}
        />

        <Tab.Screen name="Panier" component={Panier} />
        <Tab.Screen name="Compte" component={Setting} />
       

    </Tab.Navigator>
  );
};

export default App;
