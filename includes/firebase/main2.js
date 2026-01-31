import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  setDoc,
  getDocs,
  doc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let x = 0;

document.getElementById("add").addEventListener("click", async () => {
  const docId = "Note" + (++x);

  const docRef = doc(db, "Notes", docId);
  
  await setDoc(docRef, {
    Title: "Test title",
    message: "Dit is bericht" + x,
    created: Date.now()
  });

  console.log("Notitie toegevoegd  met ID", docId);
});
