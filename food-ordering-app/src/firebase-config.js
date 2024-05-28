import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBADb6gH9e_GrE8VVUpI7UuQkeEoAX1O7c",
  authDomain: "food-delivery-6ae5e.firebaseapp.com",
  projectId: "food-delivery-6ae5e",
  storageBucket: "food-delivery-6ae5e.appspot.com",
  messagingSenderId: "115953605625",
  appId: "1:115953605625:web:22e00c63e2011d07f43b28",
  measurementId: "G-FMTN8WR0RB"
};

export const app = initializeApp(firebaseConfig);