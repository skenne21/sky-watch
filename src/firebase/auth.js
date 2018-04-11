import { auth } from './firebase';

export const createUser = (email, password) => {
  return auth.createUserWithEmailAndPassword(email, password);
}

export const signIn = (email, password) => {
  return auth.signInWithEmailAndPassword(email, password);
}

export const signOut = () => {
  return auth.signOut();
}
