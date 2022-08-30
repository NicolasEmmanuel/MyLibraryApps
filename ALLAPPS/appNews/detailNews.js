import { StyleSheet ,View, Text, Image } from 'react-native'
import React from 'react'

const DetailNews = ({route}) => {

    const {item} = route.params

  return (
    <View>
        <View>
            <Image
                source={{uri:item.image}}
                style={styles.image}/>
        </View>

        <View style={styles.viewTxt}>
            <Text style={styles.detailTitle}>{item.title}</Text>
            <Text style={styles.detailDes}>{item.description}</Text>
        </View>
        
    </View>
  )
}

export default DetailNews

const styles = StyleSheet.create = ({

    detailTitle:{
        fontWeight:'600',
        fontSize:20,
    },

    detailDes:{
        fontSize:20,
    },

})