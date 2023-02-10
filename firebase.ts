import { getApp, getApps, initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD9Drqzi0C9pTdwK6TtPhKVA1cz-I8EnUo",
  authDomain: "chatgpta-chat.firebaseapp.com",
  projectId: "chatgpta-chat",
  storageBucket: "chatgpta-chat.appspot.com",
  messagingSenderId: "808359517673",
  appId: "1:808359517673:web:318ae31c05541679a53f78",
}

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
