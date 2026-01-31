import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

document.getElementById("add").addEventListener("click", async () => {
  await addDoc(collection(db, "Logbook"), {
    message: "Hallo GitHub Pages",
    created: Date.now()
  });

  console.log("Document toegevoegd");
});
