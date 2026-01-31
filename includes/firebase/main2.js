import { db } from "./firebase.js";
import {collection, setDoc, getDocs, doc} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Functie om document ID te maken: timestamp + titel
function generateDocId(title) {
  const timestamp = Date.now();
  const safeTitle = title.replace(/\s+/g, "_").toLowerCase(); //Spaties vervangen
  return `${safeTitle}_${timestamp}`;
}

//Voeg notitie toe
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
    created: Date.now()
  });

  console.log("Notitie toegevoegd met ID: ", docId);

  //invoervelden leeg maken
  document.getElementById("Title").value = "";
  document.getElementById("message").value = "";

  loadNotes(); //lijst maken
});

async function loadNotes() {
  const notesList = document.getElementById("notesList");
  notesList.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "Notes"));
  querySnapshot.forEach((docSnap) => {
    const data = docSnap.data();
    const btn = document.createElement("button");
    btn.textContent = data.Title;
    btn.onclick = () => {
      //open detailpagina met docId als query parameter
      window.location.href = `note.html?docId=${docSnap.id}`;
    };
    notesList.appendChild(btn);
    notesList.appendChild(document.createElement("br"));
  });
}

//eerste keer laden
loadNotes();
