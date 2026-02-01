import { db } from "./firebase.js";
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

//haal docId uit query string
const params = new URLSearchParams(window.location.search);
const docId = params.get("docId");

if (docId) {
  const docRef = doc(db, "Logbook", docId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    const data = docSnap.data();
    document.getElementById("flightNumber").textContent = `Vluchtnummer ${data.flightNumber}`;
    document.getElementById("Date").textContent = data.Date;
    document.getElementById("Calsing").textContent = data.Calsing;
    document.getElementById("Type").textContent = data.Type;
    document.getElementById("StartTime").textContent = data.StartTime;
    document.getElementById("LandingTime").textContent = data.LandingTime;
    document.getElementById("Duration").textContent = data.Duration;
    document.getElementById("StartLocation").textContent = data.StartLocation;
    document.getElementById("LandingLocation").textContent = data.LandingLocation;
    document.getElementById("FrontSeat").textContent = data.FrontSeat;
    document.getElementById("BackSeat").textContent = data.BackSeat;
    document.getElementById("Remark").textContent = data.Remarl;
  }
  else {
    document.getElementById("flightNumber").textContent = "Vlucht niet gevonden!";
  }
}
else {
  document.getElementById("flightNumber").textContent = "Geen vlucht geselecteerd!";
}
