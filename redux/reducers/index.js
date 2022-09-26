import { combineReducers } from "redux" ;

import login         from "./login" ;
import number        from "./number" ;
import dataCategorie from "./dataCategorie"
import dataArticle   from "./dataArticle";
import dataPanier    from "./dataPanier";
import dataUser      from "./dataUser";

export default combineReducers({
                                login, 
                                number, 
                                dataCategorie, 
                                dataArticle, 
                                dataPanier, 
                                dataUser,
                                        }) ;