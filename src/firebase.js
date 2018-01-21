import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyA3a0Uw7ipeEFkyNro9kS_OEnnH7aCEpI8",
  authDomain: "trvlz-41768.firebaseapp.com",
  databaseURL: "https://trvlz-41768.firebaseio.com",
  projectId: "trvlz-41768",
  storageBucket: "trvlz-41768.appspot.com",
  messagingSenderId: "580101284908"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export const database = firebase.database()

export default firebase;
