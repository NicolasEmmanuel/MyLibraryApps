import { View, Text } from 'react-native'
import React, { useReducer } from 'react'
import { useSelector } from 'react-redux'


const Insta = () => {

  const {login} = useSelector(state => state)

  return (
    <View>

{/* "login?" :   IF login = true-> alors affiché "est connecté"
                 ELSE login = false-> affiché "N'est pas connecté"  */}
            { login? <Text>Est connecté</Text> :
                      <Text>N'est pas connecté </Text> }

    </View>
  )
}

export default Insta