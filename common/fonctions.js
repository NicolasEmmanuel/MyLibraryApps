//Création d'une fonction "existItem" afin de racourcir le code redondant.
    

export const existItem = (data = [] , id='') => {

    //Retourne l'élément qui a été trouvé // sinon retourne "undefind" 
    return data.find(item =>item.id == id) != undefined
}
