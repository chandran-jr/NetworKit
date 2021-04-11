import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB9CWbwlT7h_lMTe0b2XCjbYU9HGlNHgsk",
    authDomain: "networkit-62da2.firebaseapp.com",
    projectId: "networkit-62da2",
    storageBucket: "networkit-62da2.appspot.com",
    messagingSenderId: "651810872816",
    appId: "1:651810872816:web:252cefb4bd6d9071379135"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db  = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db , auth};