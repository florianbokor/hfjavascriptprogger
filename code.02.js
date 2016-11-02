/*
	eine einzeilige Version von Schiffe versenken
*/

/* 
	Variablen deklarieren 
*/
/* Location des Schiffs */
var randomLocation = Math.floor(Math.random() * 5);
var location1 = randomLocation; 
var location2 = location1 + 1; 
var location3 = location2 + 1;
/* Usertracking */
var guess; 
var hits = 0;
var guesses = 0;
/* Wenn true: vorbei */
var isSunk = false;

/* Schleife erstellen und Benutzerdaten einlesen */
while (isSunk == false) {
	/* Rateversuch abholen */
	guess = prompt("Anlegen, zielen, Feuer! (Geben Sie eine Zahl zwischen 0 und 6 ein): ");
	/* Gültigkeit der Eingabe prüfen und darauf reagieren */
	if (guess < 0 || guess > 6) {
		alert("Diese Zahl liegt nicht auf dem Raster!")
	} else {
		guesses = guesses + 1;
		/* Herausfinden ob's ein Treffer ist */
		if (guess == location1 || guess == location2 || guess == location3) {
			alert("Treffer!");
			hits = hits + 1;
			/* Schiff versenkt */
			if (hits == 3) {
				isSunk = true;
				alert("Schiff versenkt!")
			} 
		} else {
			alert("Daneben!");
		}
	}
}
/* Ein bisschen Statistik ausgeben */
var stats = "Sie haben " + guesses + " Versuche gebraucht, um das Schiff zu versenken. Das entspricht einer Genauigkeit von " + (3 / guesses) + ".";
alert(stats);