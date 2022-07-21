var giaithua = 1;
var flag;
flag = prompt("Nhap 1 so bat ki: ");
for (let index = 1; index <= flag; index++) {
    giaithua *= index;
}

document.write("for: " + giaithua + "<br/>");

var giaithuaWhile = 1;
var iWhile = 1;
while (iWhile <= flag) {
    giaithuaWhile *= iWhile;
    iWhile++; 
}
document.write("While: " + giaithuaWhile + "<br/>");

var giaithuaDo = 1;
var iDo = 1;
do {
    giaithuaDo *= iDo;
    iDo++;
} while (iDo <= flag);
document.write("DoWhile: " + giaithuaDo + "<br/>");

