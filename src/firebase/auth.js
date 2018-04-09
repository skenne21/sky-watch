import { auth } from './firebase';

export const  doCreateUserWithEmailAndPassword = (email, password) => 
  auth.createUserWithEmailAndPassWord(email, password);

export const doSignInEmailAndPassword = (email, password) => 
  auth.signInWithEmailAndPassword(email, password);

export const doSignOut = () => 
  auth.signOut();