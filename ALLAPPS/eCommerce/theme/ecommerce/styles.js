//styles.js permet de creer une page css qui va gerer tout le style de l'application.

import { StyleSheet } from "react-native";
import { colors } from './colors'

export const styles = StyleSheet.create({
    content:{
        flex: 1,
        backgroundColor:colors.BGprimary,
        margin: 5,
    },


    //******* Start Catégorie ********* */

    categorieContent:{
        width:'100%',
        height:100,
        margin:10,
    },

    categorieTitle:{
        fontSize:25,
        //color:'white',
        fontWeight:'600',
    },

    touchCategorie:{
       backgroundColor:colors.BGsecondary,
       margin:10,
       padding:10,
       borderRadius:20,
       height:45,
       width:120,
    },

    textCategorie:{
        fontSize:18,
        color:colors.textPrimary,
        fontWeight:'500',
        alignSelf:'center', 
    },

    //******* Ends Catégorie ********* */
//*//
    //******* Start Article ********* */

    articleTitle: {
        fontSize: 25,
        //color:'white',
        fontWeight: '600',
      },
    
    touchArticle: {
        backgroundColor:colors.BGsecondary,
        margin: 10,
        borderRadius: 10,
        height: 200,
        width: 180,
    },

    nomArticle: {
        fontSize: 18,
        color:colors.textPrimary,
        fontWeight: '500',
        margin:10,
        marginBottom:5,
    },

    prixArticle: {
        fontSize: 18,
        color:colors.textPrimary,
        fontWeight: '500',
        margin:10,
        marginTop:5,
    },

    imageArticle: {
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        width: 180,
        height: 120,
    },

     //******* End Article ********* */
//*//
     //******* Start detail Article ********* */

     viewDetailGlobal:{
        flex:1,
        backgroundColor:colors.BGprimary,
      },

     viewArticle:{
        margin:10,
        padding:10,
        justifyContent:'center', 
      },

      textDetailView:{
        height:90,
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:80,
        marginRight:80,
      },
    
      detailNom:{
        fontSize:30,
        color:colors.textPrimary,
      },
    
      detailPrix:{
        marginTop:40,
        fontSize:30,
        color:'#457b9d',
      },

      detailImage:{
        height:300,
        width:350,
        borderRadius:10,
        alignSelf:'center',
        marginTop:10,
        marginBottom:20,
      },

      detailDescription:{
        paddingLeft:40,
        marginBottom:10,
      },

     //******* End detail Article ********* */

//*//
     //******* Start Panier ********* */

     contentPanier:{
      width:'100%',
      height:150,
      backgroundColor:'#fff',
      padding:5,
      margin:5,
      flexDirection:'row',
    },
  
    imagePanier:{
      marginTop:10,
      marginLeft:10,
      height:100,
      width:100,
    },
  
    cardPanier:{
      marginTop:10,
      marginLeft:10,
    },
  
    nomPanier:{
      fontSize:20,
      color:'#83c5be',
      marginBottom:5,
    },
  
    prixPanier:{
      fontSize:20,
      color:'#83c5be',
    },
    
     //******* End Panier ********* */
//*//
     //******* Start Inscription ********* */

     textInscription:{
        fontSize:20,
        alignSelf:"center",
        marginTop:20,
        marginBottom:20,
        color:colors.textPrimary,
   },


   //******* End Inscription ********* */
//*//
     //******* Start Connexion ********* */

     connexionTitle:{
        fontSize:20,
        alignSelf:"center",
        color:colors.textPrimary,
        marginTop:20,
        marginBottom:20,
     },

     connexionTxt:{
        alignSelf:'center',
        fontSize:20,
        marginTop:50,
     },

     //******* End Connexion ********* */

})