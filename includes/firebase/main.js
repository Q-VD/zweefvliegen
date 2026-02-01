//logbook
import { db } from "./firebase.js";
import {collection, addDoc, getDocs, doc, setDoc} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

//functie voor string omzetten naar minuten
function getMinutes(timeStr) {
  const [h, m] = timeStr.split(":").map(Number);
  return h * 60 + m;
}

// voeg vlucht toe
document.getElementById("add").addEventListener("click", async () => {
  const flightNumber = document.getElementById("flightNumber").value.trim();
  const date = document.getElementById("date").value.trim();
  const startTime = document.getElementById("startTime").value.trim();
  const landingTime = document.getElementById("landingTime").value.trim();
  const duration = getMinutes(landingTime) - getMinutes(startTime);
  const startLocation = document.getElementById("startLocation").value.trim();
  const landingLocation = document.getElementById("landingLocation").value.trim();
  const frontSeat = document.getElementById("frontSeat").value.trim();
  const backSeat = document.getElementById("backSeat").value.trim();
  const remark = document.getElementById("remark").value.trim();

  if (!date || !startTime || !landingTime || !startLocation || !landingLocation || ! frontSeat) {
    alert("Vul datum, start- en land tijd en locatie en de inzittende in!");
    return;
  }

  const docId = flightNumber;
  const docRef = doc(db, "Logbook", docId);

  let x = 0;
  
  await setDoc(docRef, {
    flightNumber: flightNumber,
    Date: date,
    StartTime: startTime,
    LandingTime: landingTime,
    Duration: duration,
    StartLocation: startLocation,
    LandingLocation: landingLocation,
    FrontSeat: frontSeat,
    BackSeat: backSeat,
    Remark: remark
  });

  console.log("Vlucht toegevoegd");

  // invoervelden leegmaken
  //document.getElementById("title").value = "";
  document.getElementById("date").value = "";
  document.getElementById("startTime").value = "";
  document.getElementById("landingTime").value = "";
  document.getElementById("startLocation").value = "";
  document.getElementById("landingLocation").value = "";
  document.getElementById("frontSeat").value = "";
  document.getElementById("backSeat").value = "";
  document.getElementById("remark").value = "";
  
  loadFlights(); //vluchten lijst maken
});

async function loadFlights() {
  const flightslist =  document.getElementById("flightslist");
  flightslist.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "Logbook"));
  querySnapshot.forEach((docSnap) => {
    const data = docSnap.data();
    const btn = document.createElement("button");
    btn.textContent = data.Title;
    btn.onclick = () => {
      //open detailpagina met docId als query parameter
      window.location.href = `flight.html?docId=${docSnap.id}`;
    };
    flightslist.appendChild(btn);
    flightslist.appendChild(document.createElement("br"));
  });
}

//eerste keer laden
loadFlights();
