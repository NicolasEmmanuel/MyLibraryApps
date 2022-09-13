import firestore from '@react-native-firebase/firestore';

//Préparation du compte "User" sur firebase
import auth from '@react-native-firebase/auth';

class Firebase {
  firestore;
  auth

  constructor() {
    this.firestore = firestore();
    this.auth = auth()
  }

  //Liaison des composants à la base de donné "Firestore"
  getCategories = async () => this.firestore.collection('Categories').get();

  getArticles = async () => this.firestore.collection('Articles').get();

  //Recupere un article.
  getArticleById = id => this.firestore.collection('Articles').doc(id).get();
}

export default Firebase;
