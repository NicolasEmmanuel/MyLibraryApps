import { ADD_CATEGORIE, EDIT_LOGIN,  EDIT_NUM } from "./type";


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