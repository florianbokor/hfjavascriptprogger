/*
	Eine App schreiben 
*/ 
window.onload = init;
/* Die drei Objekte Controller, Model und View sind das Spiel */

// Controller: Hält alles zusammen. Inkl. Benutzereingaben und Spiellogik 
var controller = {
	guesses: 0,
	processGuess: function(guess) {
		var location = this.parseGuess(guess);
		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
				view.displayMessage("Sie haben mit " + this.guesses + " Versuchen alle Schiffe versenkt.")
			}
		}
	},
	parseGuess: function(guess) {
		var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
		if (guess === null || guess.length !== 2) {
			alert("Bitte geben Sie einen Buchstaben und eine Zahl auf dem Spielfeld ein."); 
		} else {
			var firstChar = guess.charAt(0);
			var row = alphabet.indexOf(firstChar);
			var column = guess.charAt(1);
			if (isNaN(row) || isNaN(column)) {
				alert("Hoppla, das ist nicht auf dem Spielfeld!");
			} else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
				alert("Hoppla, das ist nicht auf dem Spielfeld!");
			} else {
				return row + column;
			}
		}
		return null;
	}
};
// Model: Muss die Schiffe im Auge behalten und ob sie getroffen oder versenkt wurden
var model = {
	boardSize: 7,
	numShips: 4,
	shipLength: 4,
	shipsSunk: 0,
	ships: [],
	cheat: function() { // raten ist doch langweilig ;)
		for (i = 0; i < this.ships.length; i++) {
			console.log(this.ships[i].locations);
		}
	},
	fire: function(guess) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess);
			if (index >= 0) {
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("Treffer!");
				if (this.isSunk(ship)) {
					this.shipsSunk++;
					view.displayMessage("Schiff versenkt!");
				}
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessage("Leider daneben.");
		return false;
	},
	isSunk: function(ship) {
		for (var i = 0; i < this.shipLength; i++) {
			if (ship.hits[i] !== "hit") {
				return false;
			}
		}
		return true;
	},
	generateShipLocations: function() {
		var locations;
		for (var i = 0; i < this.numShips; i++) {
			do {
				locations = this.generateShip();
			} while (this.collision(locations));
			this.ships[i].locations = locations;
		}
	},
	generateShip: function() {
		var direction = Math.floor(Math.random() * 2);
		var row; 
		var col;
		if (direction === 1) {
			// Startposition für ein horizontales Schiff erzeugen
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
		} else {
			// Startposition für ein vertikales Schiff erzeugen
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
			col = Math.floor(Math.random() * this.boardSize);
		}
		var newShipLocations = [];
		for (var i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				// Positionen für horizontales Schiff dem Array hinzufügen
				newShipLocations.push(row + "" + (col + i));
			} else {
				// Positionen für vertikales Schiff dem Array hinzufügen
				newShipLocations.push((row + i) + "" + col);
			}
		}
		return newShipLocations;
	},
	collision: function(locations) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = model.ships[i];
			for (var j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	}
};
// View: aktualisiert die Darstellung mit Treffern, Fehlversuchen und Meldungen an den Benutzer
var view = {
	displayMessage: function(msg) {
		var messageArea = document.getElementById("messageArea");
		messageArea.innerHTML = msg;
	},
	displayHit: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "hit");
	}, 
	displayMiss: function(location) {
		var cell = document.getElementById(location);
		cell.setAttribute("class", "miss");
	}
};
/* Eventhandler für den Fire-Button */
function init() {
	var fireButton = document.getElementById("fireButton");
	fireButton.onclick = handleFireButton;
	var guessInput = document.getElementById("guessInput");
	guessInput.onkeypress = handelKeyPress;
	model.generateShipLocations();
	model.cheat();
}
function handleFireButton() {
	var guessInput = document.getElementById("guessInput");
	var guess = guessInput.value;
	controller.processGuess(guess);
	guessInput.value= "";
}
function handelKeyPress(e) {
	var fireButton = document.getElementById("fireButton");
	if (e.keyCode === 13) {
		fireButton.click();
		return false;
	}
}
/* Kram um die Anzahl der Schiffe variabel zu bekommen */
var locationsArray = [];
var hitsArray = [];
for (var i = 0; i < model.shipLength; i++) {
	locationsArray.push(0);
	hitsArray.push("");
}
function Ship(locations, hits) {
	this.locations = locations;
	this.hits = hits;
}
for (var i = 0; i < model.numShips; i++) {
	model.ships.push(new Ship(locationsArray, hitsArray));
}
console.log(model.ships);
/* Testcases */
/*
// Tests für view
view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");
view.displayMessage("Ist das Ding hier an?");
*/
/*
// Tests für model
model.fire("53");
model.fire("06");
model.fire("16");
model.fire("26");
model.fire("33");
model.fire("24");
model.fire("44");
model.fire("12");
model.fire("11");
model.fire("05");
*/
/*
// Test für controller.parseGuess
console.log(controller.parseGuess("G3"));
console.log(controller.parseGuess("B6"));
console.log(controller.parseGuess("A0"));
console.log(controller.parseGuess("H0"));
console.log(controller.parseGuess("A7"));
*/
/*
// Test für controller.processGuess
controller.processGuess("A0");
controller.processGuess("A6");
controller.processGuess("B6");
controller.processGuess("C6");
controller.processGuess("H0");
controller.processGuess("A2");
controller.processGuess("C4");
controller.processGuess("D4");
controller.processGuess("E4");
controller.processGuess("B0");
controller.processGuess("B1");
controller.processGuess("B2");
*/