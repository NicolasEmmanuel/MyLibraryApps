import firestore from '@react-native-firebase/firestore';

class Firebase {
  firestore;

  constructor() {
    this.firestore = firestore();
  }

  //Liaison des composants à la base de donné "Firestore"
  getCategories = async () => this.firestore.collection('Categories').get();

  getArticles = async () => this.firestore.collection('Articles').get();

  //Recupere un article.
  getArticleById = id => this.firestore.collection('Articles').doc(id).get();
}

export default Firebase;
