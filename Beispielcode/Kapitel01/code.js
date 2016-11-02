var word = "Flaschen";
var count = 99;
while (count > 0) {
    console.log(count + " " + word + " Bier im Regal,");
    console.log(count + " " + word + " Bier.");
    console.log("Nimm' eine runter, reich' sie herum");
    count = count - 1;
    if (count > 0) {
        console.log(count + " " + word + " Bier im Regal.");
    } else {
        console.log("Keine " + word + " Bier im Regal.");
    }
}