/*
	Phrasomat
*/

/*function makePhrase() {
	var words1 = ["Kundenfreundliche", "Wertgesteigerte", "Marktorientierte", "Fokussierte", "Angepasste"];;
	var words2 = ["24/7", "mehrschichtige", "responsive", "mobile-first", "win-win"];
	var words3 = ["Benutzererfahrung", "Lösung", "Trendwende", "Strategie", "Killer-App"];

	var rand1 = Math.floor(Math.random() * words1.length);
	var rand2 = Math.floor(Math.random() * words2.length);
	var rand3 = Math.floor(Math.random() * words3.length);

	var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3] + ".";
	alert(phrase);
}
makePhrase();*/

/*
	Seifenblasen 
*/

var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 69, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44]; 
var costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29];

function printAndGetHighscore(scores) {
	var highScore = 0;
	var output;
	for (var i = 0; i < scores.length; i++) {
		output = "Mischung Nummer " + i + ", Ergebnis: " + scores[i];
		console.log(output);
		if (scores[i] > highScore) {
		highScore = scores[i];
		}	
	}
	return highScore;
}

var highScore = printAndGetHighscore(scores);
console.log("Anzahl der Tests: " + scores.length); 
console.log("Bestes Ergebnis: " + highScore);

function getBestResults(scores, highScore) {
	var bestSolutions = [];
	for (var i = 0; i < scores.length; i++) {
		if (scores[i] == highScore) {
			bestSolutions.push(i);
		}
	}
	return bestSolutions;
}

var bestSolutions = getBestResults(scores, highScore);
console.log("Mischungen mit dem besten Ergebnis: " + bestSolutions);

function getMostCostEffectiveSolution(scores, costs, highScore) {
		var cost = 100;
		var index;
		for (var i = 0; i < scores.length; i++) {
			if (scores[i] == highScore) {
				if (cost > costs[i]) {
					index = i;
					cost = costs[i];
				}
		}
	}
	return index;
}
var mostCostEffectiveSolution = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Michung Nummer " + mostCostEffectiveSolution + " ist am kosteneffektivsten")