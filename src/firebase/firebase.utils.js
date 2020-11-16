import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config= {
    apiKey: "AIzaSyBVrHyQ2pC59pvr6f0JD1Iyi8xbdeD2NLM",
    authDomain: "shopping-mall-37617.firebaseapp.com",
    databaseURL: "https://shopping-mall-37617.firebaseio.com",
    projectId: "shopping-mall-37617",
    storageBucket: "shopping-mall-37617.appspot.com",
    messagingSenderId: "522209598241",
    appId: "1:522209598241:web:a3b347d70c410af65ebc60",
    measurementId: "G-0BXDZVENQK"
  };

  export const createUserProfileDocument =  async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc('users/'+ userAuth.uid);

    const snapshot = await userRef.get();

    if(!snapshot.exists){
      const { displayName, email } = userAuth;
      const createdAt= new Date();

     try{
       await userRef.set({
         displayName,
         email,
         createdAt,
         ...additionalData
       }

       )

     }catch (error){
       console.log('erroe creating user', error.message);
     }
    }


    return userRef;
  }


  firebase.initializeApp(config);

  export const auth= firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
