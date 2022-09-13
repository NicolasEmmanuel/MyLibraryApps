import {EDIT_USER} from '../type';
import { existItem } from '../../common/fonctions';

//initialisation de "User" avec un tableau de valeur vide
const initStateUser = null;

//state prend la valeur de iniStateUser
export default function (state = initStateUser, action) {

  //mise a jour de User
  if (action.type == EDIT_USER) {
        
    //return nextState
console.log("EDIT_USER",action.payload)

    return action.payload; 

  } else {

    return state;
    
    }
}

//Combiné son reducer "article" au reducer principale dans './redux/reducers/index' =>
