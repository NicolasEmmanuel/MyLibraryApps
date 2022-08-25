import { View, Text, FlatList, Button } from 'react-native'
import React from 'react'
import { useState } from 'react'

const Tuto = () => {

    const [ getNombres, setNombres ] = useState([1,2,3,4,5,6,7,8,9,10])

    const addNombre = () =>{

        console.log("addNombre", getNombres.length)

        const tempNombre = [...getNombres, getNombres.length+1] /* Incrementation */
        
        setNombres(tempNombre)
    }

  return (
    <FlatList
    ListHeaderComponent={<Button
        title='Add'
        onPress={addNombre}
    />}
            data={getNombres} /* Boucle sur la variable 'getNombre' */
            renderItem={({item})=><Text>{item}</Text>} /* Affiche la boucle de variable */
            keyExtractor={item=>item} /* Attribut un id sur les objets */
            onEndReached={addNombre} /* "a la fin atteinte " */
            onEndReachedThreshold={0.3} /* a la fin du seuil atteinte */
            />
  )
}

export default Tuto