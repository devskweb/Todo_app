/*const firebaseConfig = {
    apiKey: "AIzaSyAZCLlEB_dJJ0f7YvCqB5k6OLvW8gr-xaY",
    authDomain: "todo-app-devskweb.firebaseapp.com",
    databaseURL: "https://todo-app-devskweb.firebaseio.com",
    projectId: "todo-app-devskweb",
    storageBucket: "todo-app-devskweb.appspot.com",
    messagingSenderId: "992460683339",
    appId: "1:992460683339:web:8e27b554fd8e25208235ce",
    measurementId: "G-L9LN1YZVD6"
  };*/

  import firebase from "firebase";

  const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyAZCLlEB_dJJ0f7YvCqB5k6OLvW8gr-xaY",
    authDomain: "todo-app-devskweb.firebaseapp.com",
    databaseURL: "https://todo-app-devskweb.firebaseio.com",
    projectId: "todo-app-devskweb",
    storageBucket: "todo-app-devskweb.appspot.com",
    messagingSenderId: "992460683339",
    appId: "1:992460683339:web:8e27b554fd8e25208235ce",
    measurementId: "G-L9LN1YZVD6"
  });
  const db=firebaseApp.firestore();

  export default db;