import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import { 
  getAuth, 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// 🔐 Firebase configuratie
const firebaseConfig = {
  apiKey: "AIzaSyBxf7yVlaa3vWvweKZ3acsK0o_GpGUCuVE",
  authDomain: "zweefvliegen-45079.firebaseapp.com",
  projectId: "zweefvliegen-45079",
  storageBucket: "zweefvliegen-45079.firebasestorage.app",
  messagingSenderId: "833199799502",
  appId: "1:833199799502:web:4b6009d9ee21a818b1649f"
};

// Init
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login
document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorEl = document.getElementById("error");

  try {
    await signInWithEmailAndPassword(auth, email, password);
    window.location.href = "dashboard.html"; // beveiligde pagina
  } catch (error) {
    errorEl.textContent = "Login mislukt";
    console.error(error.code);
  }
});
