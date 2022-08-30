import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {styles} from '../theme/styles'
import { useNavigation } from '@react-navigation/native'
import { Button  } from "@rneui/themed";




const ItemNews = ({item}) => {

  const navigation = useNavigation()

  return (
      <TouchableOpacity style={styles.content}
                        onPress={() => navigation.navigate('DetailNews',{item})}
                        >
                          <View style={styles.viewImg}>
            
                              <Image
                                  style={styles.image} 
                                  source={{uri:item.urlToImage}}
                                    />

                          </View>

                          <View style={styles.viewTxt}> 
                                <Text style={styles.styleTitle}>{item.title}</Text>
                                <Text style={styles.styleDescription}>{item.description}</Text>
                          </View>
        
      </TouchableOpacity>
  )
}

export default ItemNews

