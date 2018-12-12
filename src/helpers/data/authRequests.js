import firebase from 'firebase/app';
import 'firebase/auth';

const authenticate = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

const logoutUser = () => firebase.auth().signOut();

// github auth provider.

export default {
  authenticate,
  logoutUser,
};
