import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAOKp1VkP608bAklDf0k_bUdMEYpebhJ-0",
  authDomain: "extreme-wind-541.firebaseapp.com",
  projectId: "extreme-wind-541",
  storageBucket: "extreme-wind-541.appspot.com",
  messagingSenderId: "844811837743",
  appId: "1:844811837743:web:c7a21ede3ce4fa025501da"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

