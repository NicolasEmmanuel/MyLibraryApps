import { ADD_CATEGORIE } from "../type";

//initialisation de "categorie" avec un tableau de valeur vide
const initStateCategories = [];

//state prend la valeur de iniStateCategorie
export default function (state=initStateCategories, action){
    
    if (action.type==ADD_CATEGORIE){
        //return nextState
    }else{
        return state;
    }

}