import { initializeApp } from
  "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBxf7yVlaa3vWvweKZ3acsK0o_GpGUCuVE",
  authDomain: "zweefvliegen-45079.firebaseapp.com",
  projectId: "zweefvliegen-45079",
  appId: "1:833199799502:web:4b6009d9ee21a818b1649f"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

window.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.getElementById("loginBtn");
  if (!loginBtn) return;

  loginBtn.addEventListener("click", async () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const errorEl = document.getElementById("error");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.location.href = "/zweefvliegen/protected/dashboard.html";
    } catch (err) {
      errorEl.textContent = "Ongeldige inloggegevens";
      console.error(err.code);
    }
  });
});
