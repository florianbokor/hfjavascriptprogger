/*
	Objekte verstehen: Ein Ausflug nach Objectville 
*/

/* Testobjekte */
// Autokram 
var chevy = {
	make: "Chevy",
	model: "Bel Air",
	year: 1957,
	color: "rot",
	passengers: 2,
	convertible: false,
	mileage: 1021
};
var cadi = {
	make: "GM",
	model: "Cadillac",
	year: 1955,
	color: "bräunlich",
	passengers: 5,
	convertible: false,
	mileage: 12892
};
var taxi = {
	make: "Webville Motors",
	model: "Taxi",
	year: 1955,
	color: "gelb",
	passengers: 4,
	convertible: false,
	mileage: 281341
};
// die Autos ein wenig aufbohren
chevy.started = cadi.started = taxi.started = false;
chevy.start = cadi.start = taxi.start = function() {
	this.started = true; 
};
chevy.stop = cadi.stop = taxi.stop = function() {
	this.started = false; 
};
chevy.drive = cadi.drive = taxi.drive = function() {
	if (this.started) {
		alert("Wroom! Wroom!");
	} else {
		alert("Sie müssen erst den Motor starten!");
	}
};
var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "blaugrau",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	started: false,
	fuel: 0,
	start: function () { 
		if (this.fuel > 1) {
			this.started = true;
		} else {
			alert("Der Tank ist leer. Bitte erst nachtanken!")
		}
	},
	stop: function () {
		this.started = false;
	}, 
	drive: function () {
		if (this.started) {
			if (this.fuel > 0) {
				alert(this.model + " macht Wroom! Wroom!");
				this.fuel--;
			} else {
				alert("Bitte erst nachtanken!")
			}			
		} else {
			alert("Sie müssen erst den Motor starten!");
		}
	},
	addFuel: function(ammount) {
		this.fuel = this.fuel + ammount;
	}
};
 fiat.start();
 fiat.drive();
 fiat.addFuel(2);
 fiat.start();
 fiat.drive();
// fiat.drive();
// fiat.drive();
// fiat.stop();
// for (var prop in chevy) {
// 	console.log(prop + ": " + chevy[prop]);
// }
// taxi.drive();
// taxi.start();
// taxi.drive();
// taxi.stop();
// chevy.drive();
// chevy.start();
// chevy.drive();
// chevy.stop();
// cadi.drive();
// cadi.start();
// cadi.drive();
// cadi.stop();
// fiat.drive();
// fiat.start();
// fiat.drive();
// fiat.stop();
// function prequal(car) {
// 	if (car.mileage > 10000) {
// 		return false;
// 	} else if (car.year > 1960) {
// 		return false;
// 	}
// 	return true;
// }
// var worthALook = prequal(chevy);
// if (worthALook) {
// 	console.log("true")
// } else {
// 	console.log("false");
// }

/*// superSecretFile 

function getSecret(file, secretPassword) {
	file.opened = file.opened + 1;
	if (secretPassword == file.password) {
		return file.contents;
	} else {
		return "Ungültiges Passwort. Keine geheimen Daten für Sie!"
	}
}

function setSecret(file, secretPassword, secret) {
	if (secretPassword == file.password) {
		file.opened = 0;
		file.contents = secret;
	}
}

var superSecretFile = {
	level: "streng geheim",
	opened: 0,
	password: 2, 
	contents: "Das nächste Treffen von Dr. Evil ist in Detroit."
};

var secret = getSecret(superSecretFile, 2);
console.log(secret);

setSecret(superSecretFile, 2, "Das nächste Treffen von Dr. Evil ist in Philly.");
secret = getSecret(superSecretFile, 2);
console.log(secret);

/*
// Mehr Spaß mit Autos: Der Auto-O-Matic
// Baut ein Auto: 
function makeCar() {
	// Autoeigenschaften
	var makes = ["Chevy", "GM", "Fiat", "Webville Motors", "Tucker"];
    var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
    var years = [1955, 1957, 1948, 1954, 1961];
    var colors = ["rot", "blau", "lohfarben", "gelb", "weiß"];
    var convertible = [true, false];
    // Zu den Eigenschaften passende Zufallszahlen 
    var rand1 = Math.floor(Math.random() * makes.length);
    var rand2 = Math.floor(Math.random() * models.length);
    var rand3 = Math.floor(Math.random() * years.length);
    var rand4 = Math.floor(Math.random() * colors.length);
    var rand5 = Math.floor(Math.random() * 5);
    var rand6 = Math.floor(Math.random() * 2);
    // Das Objekt 
    var car = {
    	make: makes[rand1],
    	model: models[rand2],
    	year: years[rand3],
    	color: colors[rand4],
    	passengers: rand5,
    	conertible: convertible[rand6],
    	mileage: 0
    };
    return car;
}
// Stellt das Auto dar
function displayCar(car) { // car wird von makeCar() geliefert
	console.log("Ihr neues Auto ist ein " + car.year + "er " + car.make + " " + car.model + "!");
}
// Auto bauen: 
var carToSell = makeCar();
// und an die Ausgabe übergeben
displayCar(carToSell);*/
/*// Spielen Sie Browser 
var song = {
	name: "Walk this Way",
	artist: "Run DMC",
	minutes: 4,
	seconds: 3, 
	genre: "80ies",
	playing: false,
	play: function() {
		if (!this.playing) {
			this.playing = true;
			console.log("Es läuft " + this.name + " von " + this.artist + ".");
		}
	},
	pause: function() {
		if (this.playing) {
			this.playing = false;
		}
	}
};
song.play();
song.pause();*/
/*var eightBall = {
	index: 0,
	advice: ["Ja", "Nein", "Vielleicht", "keine Chance"],
	shake: function() {
		this.index = this.index + 1;
		if (this.index >= this.advice.length) {
			this.index = 0;
		}
	},
	look: function() {
		return this.advice[this.index];
	}
}
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());
eightBall.shake();
console.log(eightBall.look());*/