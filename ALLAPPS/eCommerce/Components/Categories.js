import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'



const RenderCategorie = ({categorie}) =>{
  
   useSelector(state=>state)

    return(
        <TouchableOpacity style={styles.touchCategorie}>
            <Text style={styles.textCategorie}>{categorie.nom}</Text>
        </TouchableOpacity>
    )
}

const Categories = () => {

        const {dataCategorie} = useSelector(state=>state);
                console.log("reducer : " ,dataCategorie )

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Categories</Text>

    <FlatList
            data={dataCategorie}
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
       backgroundColor:'#fbe9d3',
       margin:10,
       padding:10,
       borderRadius:10,
       height:45,
       width:120,
    },

    textCategorie:{
        fontSize:18,
        color:'#d19e78',
        fontWeight:'500',
    },
})