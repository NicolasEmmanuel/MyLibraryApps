import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import FirstScreen from './ALLAPPS/First';

import News from './ALLAPPS/appNews';
/* import DetailNews from './ALLAPPS/appNews/detailNews'; */

import Insta from './ALLAPPS/Insta/Index';

import Tuto from './ALLAPPS/TutoFlatlist/Index';

import store from './redux/store';
import { Provider } from 'react-redux';



const Stack = createNativeStackNavigator();


const App = () => {
  return (

    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={FirstScreen} />
          <Stack.Screen name="AppNews" component={News} />
        {/* News App Screens 
        
        <Stack.Screen name="DetailNews" component={DetailNews} />*/}

        <Stack.Screen name="AppInsta" component={Insta} />
        <Stack.Screen name="AppTuto" component={Tuto} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})