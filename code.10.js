/*
	Befreite Funktionen
*/
/*
// Funktion an Funktion übergeben; hab's nicht ganz verstanden :(
function sayIt(translator) {
	var phrase = translator("Hallo");
	alert(phrase);
	}
function hawaiianTranslator(word) {
	if (word === "Hallo") return "Aloha!";
	if (word === "Auf Wiedersehen") return "Aloha!";
}
sayIt(hawaiianTranslator);
*/
// Passagierliste
var passengers = [{name:"Jane Doloop", paid: true, ticket: "Economy"},
	{name:"Dr. Evel", paid: true, ticket: "First"},
	{name:"Sue Property", paid: false, ticket: "Business"},
	{name:"John Funcall", paid: true, ticket: "Economy"},
	{name:"Soja Milch", paid: true, ticket: "Business"},
	{name:"Jane Doe", paid: false, ticket: "First"}];
// Funktion zum Zusammenführen von Passagierliste und Tests
function processPassengers(passengers, testFunction) {
	// Über die Passagierliste iterieren
	for (var i = 0; i < passengers.length; i++) {
		// Und jeden Passagier an die Testfunktion übergeben.
		if (testFunction(passengers[i])) {
			return false;
		}
	}
	return true;
}
/*
// Allgemeine Angabe ob Passagiere auf der No-Fly-Liste stehen oder nicht gezahlt haben
function checkNoFlyList(passenger) {
	return (passenger.name === "Dr. Evel");
}
function checkNotPaid(passenger) {
	return (!passenger.paid)
}
var allCanFly = processPassengers(passengers, checkNoFlyList);
if (!allCanFly) {
	console.log("Das Flugzeug kann nicht starten, es befinden sich Passagiere auf der No-Fly-Liste");
}
var allPaid = processPassengers(passengers, checkNotPaid);
if (!allPaid) {
	console.log("Das Flugzeug kann nicht starten, es haben noch nicht alle Passagiere gezahlt.");
}
*/
/*
// Auflisten welche Passagiere bezahlt haben und welche nicht
function printPassenger(passenger) {
	var message = passenger.name
	if (passenger.paid) {
		message = message + " hat bezahlt.";
	} else {
		message = message + " hat noch nicht bezahlt."
	}
	console.log(message);
	return false;
}
processPassengers(passengers, printPassenger);
*/

// Funktionen aus Funktionen zurückgeben 
	// Am Bsp. Servicelevel abhängig von passengers.ticket
function serveCustomer(passenger) {
	var getDrinkOrderFunction = createDrinkOrder(passenger); // getDrinkOrder gibt jetzt eine Funktion zurück, die wir in der Variablen getrDrinkOrderFunction speichern. 
	// Getränkebestellung aufnehmen
	getDrinkOrderFunction();
	// Essensbestellung aufnehmen 
	var getFoodOrderFunction = createFoodOrder(passenger);
	getFoodOrderFunction();
	// Abfall einsammeln 
}

function createDrinkOrder(passenger) {
	var orderFunction; // zuerst Variable erstellen in der die Funktion gespeichert wird 
	if (passenger.ticket === "First") { // Den Code zur Überprüfung der Ticketklasse nur ein mal ausführen
		orderFunction = function() { 
			console.log("Möchten Sie einen Cocktail oder Wein?");
		}
	} else if (passenger.ticket === "Business") {
		orderFunction = function() {
			console.log("Sie können Wein, Wasser oder Cola trinken.");
		}
	} else {
		orderFunction = function() {
			console.log("Sie haben die Wahl zwischen Cola und Wasser.");
		}
	}
	return orderFunction; // die Funktion wieder raus reichen.
}
function createFoodOrder(passenger) {
	var orderFunction; // zuerst Variable erstellen in der die Funktion gespeichert wird 
	if (passenger.ticket === "First") { // Den Code zur Überprüfung der Ticketklasse nur ein mal ausführen
		orderFunction = function() { 
			console.log("Lieber das Hühnchen, oder die Paste?");
		}
	} else if (passenger.ticket === "Business") {
		orderFunction = function() {
			console.log("Die Snack- oder die Käseplatte?");
		}
	} else {
		orderFunction = function() {
			console.log("Bratwurst oder Bretzel?");
		}
	}
	return orderFunction; // die Funktion wieder raus reichen.
}
// Funktion um den Code mit den Getränken zum Laufen zu bekommen => Vieleviele Popups.
function servePassengers(passengers) {
	for (var i = 0; i < passengers.length; i++) {
		serveCustomer(passengers[i]);
	}
}
servePassengers(passengers);
/*
//Hirnschwurbel 
function fun(echo) {
	console.log(echo);
};
fun("Hallo");
function boo(aFunction) {
	aFunction("buh");
}
boo(fun);
console.log(fun);
fun(boo);
var moreFun = fun;
moreFun("Schon wieder Hallo?");
function echoMaker() {
	return fun;
}
var bigFun = echoMaker();
bigFun("Gibt es hier ein Echo?");
*/
/*
// Hirnschwurbel 2
function addN(n) {
	var adder = function(x) {
		return n + x;
	}
	return adder;
}
var add2 = addN(2);
console.log(add2(10));
console.log(add2(100));
*/