import { View, Text } from 'react-native'
import React , {useState , useContext} from 'react'
import { Button } from "@rneui/themed";
import { Input, Icon } from "@rneui/themed";
import { styles } from '../theme/ecommerce/styles';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

import Firebase from '../../../firebaseContext/firebase';
import auth from '@react-native-firebase/auth';

//configuration de la navigation 
import { useNavigation } from '@react-navigation/native'




const Inscription = () => {

  const navigation = useNavigation()

        //Création de la variable pour afficher ou sécuriser le mot de passe 
        const [eyeClose, seteyeClose] = useState(false)

        //Sauvegarde l'adresse email et le mot de passe pour les mettre dans une variable.
        const [email, setEmail] = useState()
        const [motDePasse, setMotDePasse] = useState()

        const firebase = useContext(Firebase)

        //Création de la navigation vers "Inscription"
        const returnToConnexion = () =>{
          navigation.navigate("Connexion")
        }


  const save = () => {
    console.log("Save email et mdp", email , motDePasse)

           auth()
                .createUserWithEmailAndPassword(email, motDePasse)
                .then(() => {
                  console.log('User account created & signed in!');
              }).catch( error => {

                

              });
  }

  return (
    <View style={styles.inscriptionView} >

      <Text style={styles.textInscription}>Inscription</Text>

      <Input
          placeholder='Votre e-mail'
          onChangeText={ value => setEmail(value) }
          leftIcon={
                    <Icon
                      name='alternate-email'
                      size={15}
                      color='black'
                    />
      }
    />

      <Input
          placeholder='Mot de passe '
          onChangeText={ value => setMotDePasse(value) }
          secureTextEntry={eyeClose}
          leftIcon={
                    <Icon
                      name='lock-outline'
                      size={15}
                      color='black'
                    />
      }
          rightIcon={
                    <MaterialCommunityIcons
                      name={ eyeClose ? 'eye-off-outline' : 'eye-outline' }// Si "eyeClose" "?alors" "eye-off-outline" ":Sinon" "eye-outline"
                      onPress={() => seteyeClose(!eyeClose)}
                      size={25}
                      color='black'
                    />
      }
    />

    <View>

          <Button 
              title="je m'inscris" 
              type="clear"
              onPress={save}

              containerStyle={{
                marginTop:20,
                marginBottom:20,
            }} 
            />

          <Button 
              title="Je me connecte" 
              type="solid"
              onPress={returnToConnexion}
              
              buttonStyle={{ backgroundColor: 'rgba( 222, 184, 135, 1 )' }}

              containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 10,
                  borderRadius:10,
                  alignSelf:'center',
              }} 
            />


    </View>

      

    </View>
  )
}

export default Inscription