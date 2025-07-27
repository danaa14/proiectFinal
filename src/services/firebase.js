// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrTlC9yQf4akwo9PA-Y0zdgL7g4vWDQ0s",
  authDomain: "team1-adac8.firebaseapp.com",
  projectId: "team1-adac8",
  storageBucket: "team1-adac8.firebasestorage.app",
  messagingSenderId: "156581042108",
  appId: "1:156581042108:web:721dce8ba18f64e3087db9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export async function getFood() {
    const foodsCol = collection(db, "food");

    const  foodSnapshot = await getDocs(foodsCol);
    const foodList = foodSnapshot.docs.map(doc => doc.data());

    return foodList;
}