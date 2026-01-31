import { db } from "./firebase.js";
import {
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

let x = 0;

document.getElementById("add").addEventListener("click", async () => {
  await addDoc(collection(db, "Notes"), {
    Title: "Test title",
    message: ++x,
    created: Date.now()
  });

  console.log("Notitie toegevoegd");
});
