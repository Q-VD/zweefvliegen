// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxf7yVlaa3vWvweKZ3acsK0o_GpGUCuVE",
  authDomain: "zweefvliegen-45079.firebaseapp.com",
  projectId: "zweefvliegen-45079",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
