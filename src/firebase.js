import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAa4bVH1vLEcj0_8MqNRET59VitCZ3yQms",
  authDomain: "somecatpics.firebaseapp.com",
  projectId: "somecatpics",
  storageBucket: "somecatpics.appspot.com",
  messagingSenderId: "135789351943",
  appId: "1:135789351943:web:7db73702d205813af906a2",
};


const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { firebaseConfig, storage };