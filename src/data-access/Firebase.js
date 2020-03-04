import firebase from 'firebase/app';
import 'firebase/firestore';
import config from '../config/config';

firebase.initializeApp(config.firebase);
const Firebase = firebase.firestore();


export default Firebase;