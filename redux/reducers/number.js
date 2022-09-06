import { EDIT_NUM } from "../type";

/* INITIALISATION de la valeur du state "login".*/

const initStateNumber = 0 ; 

export default function(state=initStateNumber, action){
    console.log(action)
    switch(action.type){

        case EDIT_NUM : {
            return action.payload ;
        }

        default: 
            return state ; 
    }
}                                                                                                                                                                                                                                                                                              