import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import {dataApp} from '../../datas/first'
import RenderItem from './components/RenderItem'

const index = () => {
  return (
    <View >
      <FlatList
            data={dataApp}
            renderItem = {({item}) => <RenderItem item = {item}/>}
            keyExtractor = {item=>item.id}
                />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})