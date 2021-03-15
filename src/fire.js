import firebase from 'firebase';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDvToAZj5ahQ_ztXzvoX_3qe_PoW0rQ6m0",
  authDomain: "iicsadmin.firebaseapp.com",
  projectId: "iicsadmin",
  storageBucket: "iicsadmin.appspot.com",
  messagingSenderId: "197091375371",
  appId: "1:197091375371:web:f812f4e84565aec6f60a0e",
  measurementId: "G-YR8M0C2565"
};
const fire = firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
export default fire;
