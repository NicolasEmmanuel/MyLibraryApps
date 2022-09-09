import { ADD_PANIER, REMOVE_PANIER, REMOVE_ONE_PANIER } from "../type";
import { existItem } from "../../common/fonctions";


//initialisation de "categorie" avec un tableau de valeur vide
const initStatePanier = [];

//state prend la valeur de iniStateCategorie
export default function (state=initStatePanier, action){
    

//mise a jour de Categorie
    if (action.type == ADD_PANIER){
        //return nextState
        
        //écriture simplifié de "if"
        return !existItem( state, action.payload.id ) ? [...state, action.payload]:state //-["..."Destructuration de state et mise à jour du "payload"] - ":"Sinon retourne state
       
        //Autre écriture 
        /*if( existItem(state, action.payload.id)){
                return [...state, action.payload]//"..."= destructuration 
          }else{
                return state
         } */

    
    }else if (action.type == REMOVE_PANIER){ //Vider mon panier
        
        return action.payload
        
    }else if (action.type == REMOVE_PANIER){ //Vider 1 élèment de mon panier

        //1-Rechercher la position de l'élement.
        //2-Supprimer l'élement dans le tableau.

        return state.filter(item => item.id != action.payload.id)
        
    }else{
        return state
    }

}

//Combiné son reducer "catégorie" au reducer pincipale dans './redux/reducers/index' => 