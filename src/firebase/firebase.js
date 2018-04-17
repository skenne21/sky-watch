import * as firebase from 'firebase';
import { config } from '../apiKeys';

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();


export {
  auth,
  db
};


