import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'


const data = [{id:1, nom:"Sofa"},
              {id:2, nom:"Table"},
              {id:3, nom:"Table basse"},
              {id:4, nom:"Chaise"},
            ] 

const RenderCategorie = ({categorie}) =>{
    return(
        <TouchableOpacity style={styles.touchCategorie}>
            <Text style={styles.textCategorie}>{categorie.nom}</Text>
        </TouchableOpacity>
    )
}

const Categories = () => {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Categories</Text>

    <FlatList
            data={data}
            horizontal={true}
            renderItem={({item})=><RenderCategorie 
            categorie ={item} />}
            keyExtractor={item=>item.id}
            />
            


    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    content:{
        width:'100%',
        //backgroundColor:'blue',
        height:150,
    },

    title:{
        fontSize:25,
        //color:'white',
        fontWeight:'600',
    },

    touchCategorie:{
       backgroundColor:'red',
       margin:10,
       padding:10,
       borderRadius:10,
       height:45,
       width:120,
    },

    textCategorie:{
        fontSize:18,
        color:'#fff',
        fontWeight:'500',
    },
})