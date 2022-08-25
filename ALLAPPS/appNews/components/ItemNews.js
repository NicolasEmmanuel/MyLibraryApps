import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import {styles} from '../theme/styles'

const ItemNews = ({item}) => {
  return (
      <View style={styles.content}>


          <View style={styles.viewImg}> 
                <Image
                      style={styles.image} 
                      source={{uri:item.urlToImage}}
                      />
          </View>

          <View style={styles.viewTxt}> 
                <Text style={styles.styleTxt}>{item.title}</Text>
                <Text style={styles.styleTxt}>{item.description}</Text>
          </View>
        
      </View>
  )
}

export default ItemNews

