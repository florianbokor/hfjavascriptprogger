/*
	Interaktion mit der Webseite: Das DOM kennenlernen 
*/

/* 
// Mal in document reinschauen ;)
for (var prop in document) {
	console.log(prop + ": " + document[prop]);
} 
*/
/*
// Mal in window reinschauen ;)
for (var prop in window) {
	console.log(prop + ": " + window[prop]);
} 
*/
function init() {
	var planet = document.getElementById("gruenerPlanet");
	planet.innerHTML = "Hier hat wer gepupst :(";
	planet.setAttribute("class", "warnmeldung")
}
window.onload = init; // Die Funktion wird *nicht aufgerufen*! Der Funktionswert wird der Eigenschaft onload des window-Objekts zugewiesen!!1!

