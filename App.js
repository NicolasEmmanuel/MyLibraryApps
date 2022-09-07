import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from './ALLAPPS/First';

/* AppNews */
import News from './ALLAPPS/appNews';
/* import DetailNews from './ALLAPPS/appNews/detailNews'; */

import Insta from './ALLAPPS/Insta/Index';

import Tuto from './ALLAPPS/TutoFlatlist/Index';

import TutoFireList from './ALLAPPS/TutoFireList';

import store from './redux/store';
import { Provider } from 'react-redux'

//Ecommerce
import Ecommerce from './ALLAPPS/eCommerce';

import auth from '@react-native-firebase/auth';


const Stack = createNativeStackNavigator();


const App = () => {

  auth()
  .signInAnonymously()
  .then(() => {
    console.log('User signed in anonymously');
  })
  .catch(error => {
    if (error.code === 'auth/operation-not-allowed') {
      console.log('Enable anonymous in your firebase console.');
    }

    console.error(error);
  });




  return (

    /* "Provider": Fournie les dependances de redux à toutes les screens */
    <Provider store={store}>

              <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen name="First" component={FirstScreen} />
                    
                  {/* News App Screens  */}
                  <Stack.Screen name="AppNews" component={News} />
                 {/*  <Stack.Screen name="DetailNews" component={DetailNews} /> */}

                  <Stack.Screen name="AppInsta" component={Insta} />

                  <Stack.Screen name="AppTuto" component={Tuto} />

                   {/* TutoFireList */}
                  <Stack.Screen name="TutoFireList" component={TutoFireList} />

                  {/* Ecommerce AppScreen */}
                  <Stack.Screen name="AppEcommerce"
                                options={{headerShown:false}} 
                                component={Ecommerce} />

                </Stack.Navigator>
              </NavigationContainer>

    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})