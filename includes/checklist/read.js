// read checklists
import { collection, query, where, getDocs} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

export async function loadChecklists() {
  const user = auth.currentUser;
  if (!user) return [];

  const q = query(
    collection(db, "checklists"),
    where("createdBy", "==", user.uid)
  );

  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}
