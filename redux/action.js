import { 
        ADD_ARTICLE,  
        ADD_CATEGORIE, 
        EDIT_LOGIN,  
        EDIT_NUM, 
        ADD_PANIER, 
        REMOVE_PANIER,
        REMOVE_ONE_PANIER,
        EDIT_USER 
                            } from "./type";


export const editLogin = (login) => ({

        type : EDIT_LOGIN,
        payload : login
})

export const editNumber = (number) => ({

        type : EDIT_NUM,
        payload : number
})

export const addCategorie = (categorie) => ({

        type : ADD_CATEGORIE,
        payload : categorie,
})

export const addArticle = (article) => ({

        type : ADD_ARTICLE,
        payload : article,
})

export const addPanier = (panier) => ({

        type : ADD_PANIER,
        payload : panier,
})

export const removePanier = () => ({

        type : REMOVE_PANIER,
        payload : [],
})

export const removeOnePanier = (panier) => ({

        type : REMOVE_ONE_PANIER,
        payload : panier,
})

export const editUser = (user) => ({

        type : EDIT_USER,
        payload : user,
})

