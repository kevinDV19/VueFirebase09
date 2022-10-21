import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCyrADE3JmaaicegSA_xBKC7LiT1xWvFIM",
  authDomain: "vue-firebase-09.firebaseapp.com",
  projectId: "vue-firebase-09",
  storageBucket: "vue-firebase-09.appspot.com",
  messagingSenderId: "978249649160",
  appId: "1:978249649160:web:d75b52b9704c16ee60d5bd"
};

const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export { auth }

