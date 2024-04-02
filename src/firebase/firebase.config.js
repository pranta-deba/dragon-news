import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCBjwyMb5xIxVwc1xXdlRBzpFGZYbmXRYw",
  authDomain: "dragon-news-1b8b9.firebaseapp.com",
  projectId: "dragon-news-1b8b9",
  storageBucket: "dragon-news-1b8b9.appspot.com",
  messagingSenderId: "885221696226",
  appId: "1:885221696226:web:b7e2bc8599dc35d16174bb",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);