/*
	Sortieren
*/
/*
// Einfaches Zahlensortieren
var numbersArray = [60, 50, 62, 58, 54, 54, 45];
function compareNumbers(num1, num2) {
	if (num1 > num2) {
		return 1;
	} else if (num1 === num2) {
		return 0;
	} else {
		return -1;
	}
}
numbersArray.sort(compareNumbers);
console.log(numbersArray);
function compareNumbersDesc(num1, num2) {
	if (num2 > num1) {
		return 1;
	} else if (num1 === num2) {
		return 0;
	} else {
		return -1;
	}
}
numbersArray.sort(compareNumbersDesc);
console.log(numbersArray);
*/

// Webville Cola 
var products = [{name: "Grapefruit", calories: 170, color: "rot", sold: 8200},
	{name: "Orange", calories: 160, color: "orange", sold: 12101},
	{name: "Cola", calories: 210, color: "karamell", sold: 25412},
	{name: "Diätcola", calories: 0, color: "karamell", sold: 43922},
	{name: "Zitrone", calories: 200, color: "klar", sold: 14983},
	{name: "Himbeere", calories: 180, color: "lila", sold: 9427},
	{name: "Root Beer", calories: 200, color: "karamell", sold: 9909},
	{name: "Wasser", calories: 0, color: "klar", sold: 62123}];
// Nach Verkaufszahlen sortieren 
function compareSold(colaA, colaB) {
	if (colaA.sold > colaB.sold) {
		return 1;
	} else if (colaA.sold === colaB.sold) {
		return 0;
	} else {
		return -1;
	}
}
console.log("\n------ Nach Verkaufszahlen sortiert ------");
products.sort(compareSold);
printProducts(products);
// Nach Namen sortieren
function compareName(colaA, colaB) {
	if (colaA.name > colaB.name) {
		return 1;
	} else if (colaA.name === colaB.name) {
		return 0;
	} else {
		return -1;
	}
}
console.log("\n------ Nach Namen sortiert ------");
products.sort(compareName);
printProducts(products);
// Nach Kalorien sortieren
function compareCalories(colaA, colaB) {
	if (colaA.calories > colaB.calories) {
		return 1;
	} else if (colaA.calories === colaB.calories) {
		return 0;
	} else {
		return -1;
	}
}
console.log("\n------ Nach Kalorien sortiert ------");
products.sort(compareCalories);
printProducts(products);
// Nach Farbe sortieren
function compareColor(colaA, colaB) {
	if (colaA.color > colaB.color) {
		return 1;
	} else if (colaA.color === colaB.color) {
		return 0;
	} else {
		return -1;
	}
}
console.log("\n------ Nach Farbe sortiert ------");
products.sort(compareColor);
printProducts(products);

// Den geänderten Arry in der Console ausgeben
function printProducts(products) {
	for (var i = 0; i < products.length; i++) {
		console.log("Name: " + products[i].name + ", Kalorien: " + products[i].calories + ", Farbe: " + products[i].color + ", Verkäufe: " + products[i].sold);
	}
}