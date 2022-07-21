var sum = 0;
var sumWhile = 0;
var sumDoWhile = 0;
var iDoWhile = 0;
var iWhile = 0;
for (let index = 0; index < 50; index++) {
    if (index % 2 == 1) {
        sum += index;
    }
}
document.write("for = " + sum + "<br/>");
while (iWhile < 50) {
    iWhile++;
    if (iWhile % 2 == 1) {
        sumWhile += iWhile;
    }
}
document.write("While = " + sumWhile + "<br/>");

do {
    iDoWhile++;
    if (iDoWhile % 2 == 1) {
        sumDoWhile += iDoWhile;
    }
} while (iDoWhile < 50);
document.write("Do While = " + sumDoWhile);

