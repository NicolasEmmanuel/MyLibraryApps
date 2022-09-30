import { ADD_PANIER, REMOVE_PANIER, REMOVE_ONE_PANIER} from "../type";
import { existItem } from "../../common/fonctions";


//initialisation de "panier" avec un tableau de valeur vide
const initStatePanier = [];

//state prend la valeur de iniStateCategorie
export default function (state=initStatePanier, action){
    
    //mise a jour de panier
    switch (action.type) {
        case ADD_PANIER:

        console.log("action.payload" , action.payload)

           if (!existItem( state, action.payload.id )) {//Vérification de l'existe de l'élément à l'aide de son ID 

                const item = {...action.payload , quantite: 1}// ...Destructuration et mise à jour du "payload"]
                
                return [...state,item]

           }else{
                
                //findItem by id payload for get quantité value
                const findItem = state.find( item => item.id == action.payload.id)

                //find index by id payload for get quantité value
                const indexItem = state.findIndex( item => item.id == action.payload.id)

                const newItem = {...findItem , quantite:findItem.quantite + 1}
        
                console.log("first" , newItem)

                //Création d'un tableau modifiable afin de mettre à jour la valeur précédente du state
                let newState = state //"newState = valeur de state"

                newState[indexItem] = newItem

                return [...state , newItem];

           }

           /*  //return nextState
            return !existItem( state, action.payload.id ) ? [...state, action.payload]:state //-["..."Destructuration de state et mise à jour du "payload"] - ":"Sinon retourne state
            break; */

            case REMOVE_PANIER : //Vider mon panier
            return action.payload
            break;

            case REMOVE_ONE_PANIER : //Vider "1" élément de mon panier     
            return state.filter(item => item.id != action.payload.id)
            break;

        default:
            return state
            break;
    }
}

//Combiné son reducer "catégorie" au reducer pincipale dans './redux/reducers/index' => 