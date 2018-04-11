import { db } from './firebase';

export const createUser = (id, username, email) => { 
  db.ref(`users/${id}`).set({
    username,
    email,
  });
}

export const getAllUsers = () => {
  db.ref('users').once('value');
}

