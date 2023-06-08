// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID ,
  storageBucket: import.meta.env. VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env. VITE_MESSAGINGSENDERID,
  appId:  import.meta.env.VITE_APPID

  // apiKey: "AIzaSyApdFIMbepHLlTRdQt--cHbIv9CQCFMKIQ",
  // authDomain: "chef-project-821d1.firebaseapp.com",
  // projectId: "chef-project-821d1",
  // storageBucket: "chef-project-821d1.appspot.com",
  // messagingSenderId: "864436785774",
  // appId: "1:864436785774:web:ebe9c367e1437da0c68c7f"


};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;