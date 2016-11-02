/*
	Funktionen
*/

/*function bark(name, weight) {
	if (weight > 20) {
		console.log(name + " sagt: WAU! WAU!"); 
	} else {
		console.log(name + " sagt: wau! wau!");
	}
}

bark("Rover", 23);
bark("Spot", 13);
bark("Spike", 53);
bark("Lady", 17);*/

/*function bake(degrees) {
	var message; 

	if (degrees > 260) {
		message = "Ich bin doch kein Atomreaktor!";
	} else if (degrees < 37) {
		message = "Ich bin doch kein Kühlschrank!";
	} else {
		message = "Das ist eine angenehme Termperatur für mich";
		// setMode("bake");
		// setTemp(degrees);
	}
	return message;
}

var status = bake(120);
console.log(status);*/

/*function calculateArea(r) {
	var area;
	if (r <= 0) {
		return 0;
	} else {
		area = Math.PI * r * r;
		return area;
	}
}

var radius = 123;
var theArea = calculateArea(radius);
console.log("Die Fläche beträgt: " + theArea);*/

function clunk(times) {
	var num = times;
	while (num > 0) {
		display("dengel");
		num = num - 1;
	}
}
function thingamajic(size) {
	var facky = 1; 
	clunkCounter = 0; 
	if (size == 0) {
		display("schepper");
	} else if (size == 1) {
		display("klonk");
	} else {
		while (size > 1) {
			facky = facky * size;
			size = size - 1;
		}
		clunk(facky);
	}
}
function display(output) {
	console.log(output);
	clunkCounter = clunkCounter + 1;
}
var clunkCounter = 0;
thingamajic(6);
console.log(clunkCounter);