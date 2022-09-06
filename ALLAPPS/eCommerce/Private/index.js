import { StyleSheet, Text, View,} from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux'
import { editLogin, editNumber } from '../../../redux/action'
import { Button } from '@rneui/base'


const Private = () => {

  /* Dispatch "editLogin" dans toute l'appli "" */
  const dispatch = useDispatch()

        const pressDeconnexion = () => {

            dispatch(editLogin(false))
            console.log("Deconnexion")
        }

  

  return (
    <View style={styles.privateView}>

      <Text style={styles.privateTxt}>Private</Text>
      
          <Button 
                title='Déconnexion'
                onPress={pressDeconnexion} 
                titleStyle={{ fontWeight: '500' }}
                buttonStyle={{backgroundColor: '#ffc300',}}

                containerStyle={{
                  width: 150,
                  height: 45,
                  marginHorizontal: 130,
                  borderRadius:10,
                }}
                /> 

      

    </View>
  )
}

export default Private

const styles = StyleSheet.create({

  privateView:{
    paddingBottom:20,
    marginBottom:20,
    paddingTop:20,
    bottom:430,
  },
  
  privateTxt:{
    color:'#98c1d9',
    alignSelf:'center',
    marginBottom:150,
    fontSize:35,
  },

})