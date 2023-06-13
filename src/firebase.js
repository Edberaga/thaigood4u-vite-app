// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuEy2g93cjuWnd4fycwx162QxDC7KeALA",
  authDomain: "thaigood4u-server.firebaseapp.com",
  projectId: "thaigood4u-server",
  storageBucket: "thaigood4u-server.appspot.com",
  messagingSenderId: "169038433960",
  appId: "1:169038433960:web:ffcc87715079df7aabbc9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);