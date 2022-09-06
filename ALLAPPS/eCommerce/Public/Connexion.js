import { StyleSheet, Text, View, } from 'react-native'
import React from 'react'
import { useDispatch , useSelector } from 'react-redux'
import { editLogin, editNumber } from '../../../redux/action'
import { Button } from '@rneui/base'

const Connexion = () => {

  /* Dispatch "editLogin" dans toute l'appli "" */
  const dispatch = useDispatch()

  /* Affiche  */
  const state = useSelector(state=>state)
     const { number } = useSelector(state=>state)
     console.log(state)

      const pressConnexion = () => {
          dispatch(editLogin(true))
            console.log("connexion")
        }

        const click = () => {
          dispatch(editNumber(number + 1))
          console.log(number)
        }
  
  return (
    <View>
      
          <View style={styles.connexionView}>
             

                <Button 
                      title='Connexion'
                      onPress={pressConnexion} 
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

          <View style={styles.clickView}>
            
                <Text style={styles.clickTxt}>{number}</Text>

                <Button 
                      title='click'
                      onPress={click} 
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
            
    </View>
  )
}

export default Connexion

const styles = StyleSheet.create({

  connexionView:{
    paddingBottom:20,
    marginBottom:20,
    paddingTop:20,
    bottom:430,
  },

  connexionTxt:{
    marginLeft:10,
    fontSize:20,
    
  },

  clickView:{
    paddingTop:20,
    bottom:400
  },

  clickTxt:{
    alignSelf:'center',
    marginBottom:20,
    fontSize:40,
    fontWeight:'800',
    color:'#ae2012',
  },


})