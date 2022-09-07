import {ADD_ARTICLE} from '../type';
import { existItem } from '../../common/fonctions';

//initialisation de "Articles" avec un tableau de valeur vide
const initStateArticles = [];

//state prend la valeur de iniStateArticles
export default function (state = initStateArticles, action) {

  //mise a jour de Articles
  if (action.type == ADD_ARTICLE) {
    //return nextState
console.log("ADD_ARTICLE",action.payload)
    //écriture simplifié de "if"
    return !existItem(state, action.payload.id) ?[...state, action.payload] :state; //-["..."Destructuration de state et mise à jour du "payload"] - ":"Sinon retourne state

            /*if( existItem(state, action.payload.id)){
                        return [...state, action.payload]//"..."= destructuration 
                }else{
                        return state
                } */

             } else {
                    return state;
    }
}

//Combiné son reducer "article" au reducer principale dans './redux/reducers/index' =>
