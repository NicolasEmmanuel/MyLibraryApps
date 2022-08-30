import { Text, FlatList, Button, ActivityIndicator } from 'react-native'
import React from 'react'

import ItemNews from './components/ItemNews'
import { useState, useEffect } from 'react'
import { apiNews } from './function/api'

import RenderEmptyComponent from './components/RenderEmptyComponent'



const NewsScreen = () => {

const [getNews, setNews] = useState([])


const [waiting , setWaiting] = useState(false)/* Gestion du 'waiting' */


const [getPage , setPage] = useState() /* gestion de la pagination */

const loadNews = async () => {
   
const articles = await apiNews(getPage) ;  /* Chargement de mon 'api' */
    setWaiting(true)
    setTimeout(() => {
                     setNews([...getNews, ...articles])
                     setWaiting(false)
                }, 2000)
  }


const nextPage = async () => { /* Chargement load more */
  setPage( getPage + 1 )
    loadNews()
  }

    useEffect(()=>{
      setWaiting(true)
      loadNews();
    
    })

  return (

    <FlatList
        data={getNews}
        renderItem={({item})=><ItemNews item={item}/>}
        keyExtractor={(item, index) => 'key'+index}

        ListHeaderComponent={<Button
                                    title='Next'
                                    onPress={nextPage}
                                    />}

        ListEmptyComponent={<RenderEmptyComponent waiting={waiting}/>}/* Affiche le texte si la Flatlist est vide */
        ListFooterComponent={(waiting && getNews.length > 0 ) && <ActivityIndicator/>} /* Si 'waiting' et 'getNews.length' different de '0' charger plus'   */
        
            />
  )
}

export default NewsScreen
