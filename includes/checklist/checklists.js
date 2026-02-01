//checklists
import { db } from "./zweefvliegen/includes/firebase/firebase.js";
import { auth} from "./zweefvliegen/includes/firebase/dashboard-auth.js";
import { collection, addDoc, serverTimestamp} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function createChecklist(title, items) {
  const user = auth.currentUser;
  if (!user) return;
  
  await addDoc(collection(db, "Checklists"), {
    title,
    items,
    createdBy: user.uid,
    createdAt: serverTimestamp()
  });
}
