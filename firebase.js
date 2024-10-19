import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfUhNmD_pQibfLv3L7D8QOoqNH9N8wspc",
  authDomain: "ecoplume-d0d9b.firebaseapp.com",
  projectId: "ecoplume-d0d9b",
  storageBucket: "ecoplume-d0d9b.appspot.com",
  messagingSenderId: "80361075857",
  appId: "1:80361075857:web:c390eba07d915eab28fb30"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export {auth, provider};
