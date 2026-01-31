import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// haal docId uit query string
const params = new URLSearchParams(window.location.search);
const docId = params.get("docId");

if (docId) {
  const docRef = doc(db, "Notes", docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    document.getElementById("noteTitle").textContent = data.Title;
    document.getElementById("noteMessage").textContent = data.message;
    const date = new Date(data.created);
    document.getElementById("noteDate").textContent = `Aangemaakt op: ${date.toLocaleString()}`;
  } else {
    document.getElementById("noteTitle").textContent = "Notitie niet gevonden";
  }
} else {
  document.getElementById("noteTitle").textContent = "Geen notitie geselecteerd";
}
