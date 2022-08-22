import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from '../theme/style'

import { useNavigation } from '@react-navigation/native';

const RenderItem = ({item}) => {

  const navigation = useNavigation();

    const openApp = () =>{

      navigation.navigate(item.nomApp)
      
        console.log("item.id", item)

    }

  return (
    <TouchableOpacity onPress={openApp} style={styles.content}>
      <Text style={styles.titre}>{item.titre}</Text>
    </TouchableOpacity>
  )
}

export default RenderItem
