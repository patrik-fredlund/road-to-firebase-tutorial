import app from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: 'AIzaSyCUVNZLgP_Tr3aH8VAeDLy1qI1pDbv47Ds',
  authDomain: 'road-to-firebase-917f9.firebaseapp.com',
  projectId: 'road-to-firebase-917f9',
  storageBucket: 'road-to-firebase-917f9.appspot.com',
  messagingSenderId: '476581361720',
  appId: '1:476581361720:web:db4a7812c9f6d64cae8ecd',
};
// Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
  }
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);
  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}
export default Firebase;
