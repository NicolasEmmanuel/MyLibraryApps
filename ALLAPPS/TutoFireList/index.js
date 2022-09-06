import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

import firestore from '@react-native-firebase/firestore';





    const Item = ( {item }) => (
    <View style={styles.item}>

        <View>
            <Text style={styles.nom}>{item.nom}</Text>
            <Text style={styles.surnom}>{item.surnom}</Text>
        </View>

        <Image
            style={styles.logo}
            source={{uri: item.image}}
        />
        

    </View>
    
    );

    const App = () => {
        const renderItem = ({ item }) => (
          <Item  item={item} />
        );

        const [data , setData] = useState ([])


 
/* "useEfect": Chargement de mon composant */
useEffect(()=>{
    firestore().collection('stagiaire').onSnapshot(Snapshot=>{

        //console.log('Snapshot',Snapshot)

        /* Ajouter les données reçu en live dans un tableau */
        let dataTemp = []
        Snapshot.forEach(document=>{

            dataTemp.push({id : document.id , ...document.data()})
            setData(dataTemp)
            console.log('document' , document.data())
        }) 
    })
},[])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}


export default App;

const styles = StyleSheet.create({

    item: {
        flexDirection:'row',
        backgroundColor: '#ffc300',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        justifyContent:'space-between',
        height:200,
      },

    logo:{
        height:150,
        width:80,
    },

    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },

   

    title: {
      fontSize: 32,
      color: '#003566',
    },

    
  });

