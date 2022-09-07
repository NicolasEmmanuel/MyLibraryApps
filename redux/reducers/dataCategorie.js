import { ADD_CATEGORIE } from "../type";
import { existItem } from "../../common/fonctions";

//initialisation de "categorie" avec un tableau de valeur vide
const initStateCategories = [];

//state prend la valeur de iniStateCategorie
export default function (state=initStateCategories, action){
    

//mise a jour de Categorie
    if (action.type == ADD_CATEGORIE){
        //return nextState
        
        //écriture simplifié de "if"
        return !existItem( state, action.payload.id ) ?[...state, action.payload]:state //-["..."Destructuration de state et mise à jour du "payload"] - ":"Sinon retourne state
       
        //Autre écriture sans la fonction "existItem"
        /*if( existItem(state, action.payload.id)){
                return [...state, action.payload]//"..."= destructuration 
          }else{
                return state
         } */

    }else{
        return state;
    }

}

//Combiné son reducer "catégorie" au reducer pincipale dans './redux/reducers/index' => 