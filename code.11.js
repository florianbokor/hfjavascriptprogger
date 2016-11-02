/*
	Seriöse Funktionen
*/
/*
// Wann wird eine Funktion definiert? 
var migrating = true;
if (migrating) {
	quack(4);
	fly(3);
}
var fly = function(num) {
	for (var i = 0; i < num; i++) {
		console.log("Ich fliege!");
	}
}
function quack(num) {
	for (var i = 0; i < num; i++) {
		console.log("Quack!");
	}
}
// Returns:"TypeError: fly is not a function"
*/

// Funktionen verschachteln 
var migrating = true;
var fly = function(num) {
	var sound = "Ich fliege!";
	function wingFlapper() {
		console.log(sound);
	}
	for (var i = 0; i < num; i++) {
		wingFlapper();
	}
}
function quack(num) {
	var sound = "Quack!"
	var quacker = function() {
		console.log(sound);
	}
	for (var i = 0; i < num; i++) {
		quacker();
	}
}
if (migrating) {
	quack(4);
	fly(3);
}
