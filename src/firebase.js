import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN, 
  databaseURL: process.env.REACT_APP_DATABASE_URL,
};

firebase.initializeApp(config);

export default firebase;
