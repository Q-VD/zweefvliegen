import { db } from "./firebase.js";
import {
  collection,
  setDoc,
  getDocs,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Functie om document ID te maken: timestamp + titel
function generateDocId(title) {
  const timestamp = Date.now();
  const safeTitle = title.replace(/\s+/g, "_").toLowerCase(); //Spaties vervangen
  return `${safeTitle}_${timestamp}`;
}

document.getElementById("add").addEventListener("click", async () => {
  const title = document.getElementById("title").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!title || !message) {
  alert("Vul zowel title als bericht in!");
  return;
  }

  const docId = title;
  const docRef = doc(db, "Notes", docId);

  await setDoc(docRef, {
    Title: title,
    message: message,
  });

  console.log("Notitie toegevoegd met ID: ", docId);

});
