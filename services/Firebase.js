import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDAb4K8CFtV7Kwz7ojwP607pwVDD-xRwK4",
    authDomain: "app-school-demo-3f948.firebaseapp.com",
    projectId: "app-school-demo-3f948",
    storageBucket: "app-school-demo-3f948.appspot.com",
    messagingSenderId: "677983274672",
    appId: "1:677983274672:web:5b693d6b18fa0083b61d75"
  };

  //Initialize Firebase
  if(!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
  }