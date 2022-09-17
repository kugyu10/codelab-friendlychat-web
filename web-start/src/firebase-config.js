/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyAGCFrR5uJmPox7D3gD50tQ_0f_OxZYy9M",
  authDomain: "friendlychat-e57fe.firebaseapp.com",
  projectId: "friendlychat-e57fe",
  storageBucket: "friendlychat-e57fe.appspot.com",
  messagingSenderId: "664112316355",
  appId: "1:664112316355:web:e25880a6d694189ea2c776",
  measurementId: "G-KZ09CY9JF3"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}