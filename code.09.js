/*
	Events be-handeln	
*/
/*
	Der Teil mit den Bildern zum Aufdecken 
*/
window.onload = init;
function init() {
	/*
	// Code für ein Bild
	var image = document.getElementById("zero");
	image.onclick = showAnswer;
	*/
	var images = document.getElementsByTagName("img");
	for (var i = 0; i < images.length; i++) {
		images[i].onclick = showAnswer;
		// images[i].onmouseover = showAnswer;
		// images[i].onmouseout = reblur;

	}
	// console.log(images);
}
function showAnswer(eventObj) {
	/*
	// Code für ein Bild
	var image = document.getElementById("zero");
	image.src = "Beispielcode/Kapitel09/zero.jpg";
	*/
	var image = eventObj.target;
	/*
	// Testcases um zu sehen was so bei Klicks rauskommt
	console.log(eventObj);
	console.log(image);
	*/
	/*
	// vorgeschlagener Code:
	var name = image.id;
	name = name + ".jpg";
	image.src = name;
	*/
	// zusammengefasster Code zum Austausch der Bildquelle
	image.src = "Beispielcode/Kapitel09/" + image.id + ".jpg";
	setTimeout(reblur, 2000, image);
}
function reblur(image) {
	// abgekürzt wie in Z. 39
	image.src = "Beispielcode/Kapitel09/" + image.id + "blur.jpg";
}