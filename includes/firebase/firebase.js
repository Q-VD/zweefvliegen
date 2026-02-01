// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxf7yVlaa3vWvweKZ3acsK0o_GpGUCuVE",
  authDomain: "zweefvliegen-45079.firebaseapp.com",
  projectId: "zweefvliegen-45079",
  appId: "1:833199799502:web:4b6009d9ee21a818b1649f"
};

// Initialiseer app één keer
export const app = initializeApp(firebaseConfig);

// Exporteer services
export const auth = getAuth(app);
export const db = getFirestore(app);
