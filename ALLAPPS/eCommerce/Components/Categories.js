import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { styles } from '../theme/ecommerce/styles'



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
    <View style={styles.categorieContent}>
      <Text style={styles.categorieTitle}>Categories</Text>

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

