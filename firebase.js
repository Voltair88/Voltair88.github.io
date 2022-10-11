import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBWwnSvGYr5hdGoIpCm71dp-Yxku_V0OwU",
  authDomain: "testsite-362c7.firebaseapp.com",
  databaseURL:
    "https://testsite-362c7-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "testsite-362c7",
  storageBucket: "testsite-362c7.appspot.com",
  messagingSenderId: "61261646572",
  appId: "1:61261646572:web:203e8b2ec7ea30bcfff3c9",
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
