import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBcCb76t45sOaAUWu6bEvjf3WNCrrsTS2c",
  authDomain: "sending-things.firebaseapp.com",
  projectId: "sending-things",
  storageBucket: "sending-things.appspot.com",
  messagingSenderId: "790309263085",
  appId: "1:790309263085:web:63a257b57fdaaf284b1ee4"
};

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}else{
  firebase.app();
}

const database = firebase.database();

export {database, firebase};