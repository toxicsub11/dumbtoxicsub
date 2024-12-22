import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js";  
import { getFirestore, getDocs, collection } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-firestore.js";

//add your credentials from firebase project
const firebaseConfig = {
  apiKey: "AIzaSyBBihP1HA72baqPz4OQZBW_pocZUmNO2PM",
  authDomain: "dumbtoxicsub-d2c87.firebaseapp.com",
  projectId: "dumbtoxicsub-d2c87",
  storageBucket: "dumbtoxicsub-d2c87.firebasestorage.app",
  messagingSenderId: "588920467013",
  appId: "1:588920467013:web:cb8a4abdb83d054e4a3d2c",
  measurementId: "G-0S84QJV07G"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();

/*//create your custom method
export const getWolfs = () => {
  return getDocs(collection(db, "yourNameCollection"));
};*/