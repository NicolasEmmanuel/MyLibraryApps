import { StyleSheet, Text, View, FlatList, Button } from 'react-native'
import React from 'react'
import {news} from '../../datas/news'
import ItemNews from './components/ItemNews'
import { useState, useEffect } from 'react'
import { apiNews } from './function/api'

const NewsScreen = () => {

const [getNews, setNews] = useState([])

/* gestion de la pagination */
const [getPage , setPage] = useState(1)

const initNews = async () => {
    /* Chargement de mon 'api' */
    const articles = await apiNews(getPage) ;
    setNews(articles)
  }

/* Chargement load more */
const nextPage = async () => {
  setPage( getPage + 1 )
  console.log( 'page:' , getPage)
  }

    useEffect(()=>{
      initNews();
    
    })

  return (

    <FlatList
        ListHeaderComponent={<Button
                                    title='Init News'
                                    onPress={initNews}
                                    />}

        ListEmptyComponent={<Text>Pas d'actu</Text>}/* Affiche le texte si la Flatlist est vide */
        data={getNews}
        renderItem={({item})=><ItemNews item={item}/>}
        keyExtractor={item=>item.id}
            />
  )
}

export default NewsScreen
