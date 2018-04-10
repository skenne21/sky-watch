import * as firebase from 'firebase';

const  config = {
  apiKey: "AIzaSyB047LgRpIDWRoVQ1ErTyXIG3q5FbZXznc",
  authDomain: "even-dream-200216.firebaseapp.com",
  databaseURL: "https://even-dream-200216.firebaseio.com",
  projectId: "even-dream-200216",
  storageBucket: "even-dream-200216.appspot.com",
  messagingSenderId: "567440292870"
};

if (!firebase.apps.length) {
  firebase.initializeApp(config); 
}

const auth = firebase.auth();

export {
  auth
};


