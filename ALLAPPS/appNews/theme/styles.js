import { StyleSheet } from 'react-native'
import { colors } from './colors'

export const styles = StyleSheet.create({
    
    content:{
        backgroundColor : colors.primary,
        padding:10,
        margin:10,
        borderRadius:5, 
        flexDirection:'row',
    }, 

    viewImg:{
        backgroundColor:'#546e7a',
        width:105,
        height:100,
        borderRadius: 50,
    },

    viewTxt:{
        color:'',
        width: 250,
        height:100,
        marginLeft:4,
    },

    styleTxt:{
        color:'#fafafa',
        
    },



    image:{
        width: 100,
        height:100,
        borderRadius:50,
    },
})