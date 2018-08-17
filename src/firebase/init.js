import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAyiW2I1jpM76Ajr59nWIlGFOb-ykSk35o",
  authDomain: "hydra-chat-37760.firebaseapp.com",
  databaseURL: "https://hydra-chat-37760.firebaseio.com",
  projectId: "hydra-chat-37760",
  storageBucket: "hydra-chat-37760.appspot.com",
  messagingSenderId: "10865074765"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()
