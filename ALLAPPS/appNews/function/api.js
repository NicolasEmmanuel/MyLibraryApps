import axios from "axios"

/* Url de mon 'api' */
const urlApi = 'https://newsapi.org/v2/everything' ;

/* Clé de mon 'api' */
const apiKey = '6054eadf30e049759c292d9ecd6ed348' ;

/* const urlApi = 'https://gnews.io/api/v4/search' ;

const apiKey = '8e8a20b86767d30d803a44cb6b414844' ;  */




export const apiNews = async (page) => { 

    /* Paramètre de mon api */
    const params = {
        q : 'France',
        lang:'fr',
        from : '2022-08-24', 
        sortBy : 'popularity',
        apiKey : apiKey ,
        page : page ,
        pageSize : 10 ,
    }

    const {data} = await axios.get(urlApi, {params:params})

    console.log('api News' , data.articles)

   return data.articles 
 }