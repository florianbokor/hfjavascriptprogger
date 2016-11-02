// Um diese Testdatei zu benutzen, sollten Sie
// Model, View und Controller nicht verändern.
// Den Testcode sollten Sie dagegen, bis auf die Teile,
// die Sie benutzen, auskommentieren.
// Vergessen Sie nicht, Sie können... 
/* 
   Hier steht der Code
*/
// benutzen, um längere Codeabschnitte auszukommentieren.


// Den View testen
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

view.displayMiss("00");
view.displayHit("34");
view.displayMiss("55");
view.displayHit("12");
view.displayMiss("25");
view.displayHit("26");

view.displayMessage("Klopf klopf, ist das Ding hier an?");

// Das Model testen
var model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,
	
	ships: [
		{ locations: ["06", "16", "26"], hits: ["", "", ""] },
		{ locations: ["24", "34", "44"], hits: ["", "", ""] },
		{ locations: ["10", "11", "12"], hits: ["", "", ""] }
	],

	fire: function(guess) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			var index = ship.locations.indexOf(guess);

			if (index >= 0) {
				ship.hits[index] = "hit";
				view.displayHit(guess);
				view.displayMessage("TREFFER!");

				if (this.isSunk(ship)) {
					view.displayMessage("Schiff versenkt!");
					this.shipsSunk++;
				}
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessage("Leider daneben.");
		return false;
	},

	isSunk: function(ship) {
		for (var i = 0; i < this.shipLength; i++)  {
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
		console.log("Alle Schiffspositionen: ");
		console.log(this.ships);
	},

	generateShip: function() {
		var direction = Math.floor(Math.random() * 2);
		var row, col;

		if (direction === 1) { // horizontal
			row = Math.floor(Math.random() * this.boardSize);
			col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
		} else { // vertical
			row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
			col = Math.floor(Math.random() * this.boardSize);
		}

		var newShipLocations = [];
		for (var i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				newShipLocations.push(row + "" + (col + i));
			} else {
				newShipLocations.push((row + i) + "" + col);
			}
		}
		return newShipLocations;
	},

	collision: function(locations) {
		for (var i = 0; i < this.numShips; i++) {
			var ship = this.ships[i];
			for (var j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	}
	
}; 

/*
model.fire("53"); // Daneben

model.fire("06"); // Treffer
model.fire("16"); // Treffer
model.fire("26"); // Treffer

model.fire("34"); // Treffer
model.fire("24"); // Treffer
model.fire("44"); // Treffer

model.fire("12"); // Treffer
model.fire("11"); // Treffer
model.fire("10"); // Treffer
*/


// parseGuess testen
function parseGuess(guess) {
	var alphabet = ["A", "B", "C", "D", "E", "F", "G"];

	if (guess === null || guess.length !== 2) {
		alert("Bitte geben einen Buchstaben und eine Zahl auf dem Spielfeld ein.");
	} else {
		var row = alphabet.indexOf(guess.charAt(0));
		var column = guess.charAt(1);
		
		if (isNaN(row) || isNaN(column)) {
			alert("Hoppla, das ist nicht auf dem Spielfeld.");
		} else if (row < 0 || row >= model.boardSize ||
		           column < 0 || column >= model.boardSize) {
			alert("Hoppla, das ist nicht auf dem Spielfeld.");
		} else {
			return row + column;
		}
	}
	return null;
}

/*
console.log("Teste parseGuess");
console.log(parseGuess("A0"));
console.log(parseGuess("B6"));
console.log(parseGuess("G3"));
console.log(parseGuess("H0")); // ungültig
console.log(parseGuess("A7")); // ungültig
*/

// Den Controller testen

var controller = {
	guesses: 0,

	processGuess: function(guess) {
		var location = parseGuess(guess);
		if (location) {
			this.guesses++;
			var hit = model.fire(location);
			if (hit && model.shipsSunk === model.numShips) {
					view.displayMessage("Sie haben mit " + this.guesses + " Versuchen alle Schiffe versenkt.");
			}
		}
	}
}


// Sie sollten drei Schiffe auf dem Spielfeld sehen. Die Meldung
// sollte lauten: "Sie haben mit 10 Versuchen alle Schiffe versenkt."
/*
controller.processGuess("A0"); // Daneben

controller.processGuess("A6"); // Treffer
controller.processGuess("B6"); // Treffer
controller.processGuess("C6"); // Treffer

controller.processGuess("C4"); // Treffer
controller.processGuess("D4"); // Treffer
controller.processGuess("E4"); // Treffer

controller.processGuess("B0"); // Treffer
controller.processGuess("B1"); // Treffer
controller.processGuess("B2"); // Treffer
*/

