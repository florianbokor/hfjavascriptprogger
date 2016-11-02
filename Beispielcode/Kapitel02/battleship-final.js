var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location1 + 2;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) {
	guess = prompt("Anlegen, Zielen, Feuer! (Geben Sie eine Zahl zwischen 0 und 6 ein):");
	if (guess < 0 || guess > 6) {
		alert("Diese Zahl liegt nicht auf dem Raster!");
	} else {
		guesses = guesses + 1;
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("TREFFER!");
			hits = hits + 1;
			if (hits == 3) {
				isSunk = true;
				alert("Schiff versenkt!");
			}
		} else {
			alert("DANEBEN");
		}
	}
}
var stats = "Sie haben " + guesses + " Versuche gebraucht, um das Schiff zu versenken. " +
            "Das entspricht einer Genauigkeit von " + (3/guesses);
alert(stats);
