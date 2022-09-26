import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { Button, ListItem, Avatar } from "@rneui/themed";

import {  useDispatch } from 'react-redux'
import {  removeOnePanier } from '../../../redux/action'

const PanierItem = ({item}) => {

    const dispatch = useDispatch()

    //Supprimer "1" article.
    const removeOne = () =>{
      dispatch(removeOnePanier(item))
    }

  return (
        <ListItem.Swipeable
            
            rightContent={(removeOne) => (
                <Button
                    title="Delete"               
                    onPress={() => removeOne()}
                    icon={{ name: 'delete', color: 'white' }}
                    buttonStyle={{ minHeight: '100%', backgroundColor: 'red' }}
                    />
            )}
        >
        <Avatar title={item.nom[0]} source={{ uri: item.image }} />
        <ListItem.Content>
            <ListItem.Title>{item.nom}</ListItem.Title>
        </ListItem.Content>

        <ListItem.Chevron />

        </ListItem.Swipeable>
    )
}

export default PanierItem

const styles = StyleSheet.create({})