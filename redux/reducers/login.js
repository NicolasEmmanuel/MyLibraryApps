import { EDIT_LOGIN } from "../type";

/* INITIALISATION de la valeur du state "login".*/

const initStateFalse = false ; 

export default function(state=initStateLogin, action){
    switch(action.type){

        case EDIT_LOGIN : {
            return action.payload ;
        }

        default: 
            return state ; 
    }
}