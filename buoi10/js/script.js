// var button = document.getElementById("clickme");
// var changeText = document.getElementById("changeme");
// console.log(button);
// button.addEventListener('click', function () {
//     // alert("coming soon...")
//     var flag = prompt("nhap thu")
//     // if (flag) {

//     // }

//     switch (flag) {
//         case 'thu 2':
//             console.log('day la thu 2 ')
//             break;
//         case 'thu 3':
//             console.log('day la thu 3 ')
//             break;
//         case 'thu 4':
//             console.log('day la thu 4 ')
//             break;
//         case 'thu 5':
//             console.log('day la thu 5 ')
//             break;
//         case 'thu 6':
//             console.log('day la thu 6 ')
//             break;
//         case 'thu 7':
//             console.log('day la thu 7')
//             break;
//         case 'thu cn':
//             console.log('day la thu cn ')
//             break;
//         default:
//             console.log('khong hop le');
//             break;
//     }
// })

// changeText.addEventListener('change', function () {
//     alert("coming soon...")
// })



function myFunction() {
    alert('We are here')
}



var number = 0;
// while (number < 100) {
//     number++;
// }
// console.log(number);

// do {
//     number++;
// } while (number > 1);
// console.log(number);


// for (var i = 0; i < 10; i++) {
//     if (i > 5) {
//         break;
//     }
//     console.log(i);
// }

// var sum = 0;
// for (var i = 0; i <= 100; i++) {
//     sum += i;
//     if (sum >= 100) {
//         break;
//     }
// }
// console.log(sum);
// var sum2 = 0;
// while (sum2 < 100) {
//     number++;
//     sum2 += number;
// }
// console.log(sum2);


var arr = [1, -2, 3, -4, 5, -6, 7];
var min = 0, max = 0;
var soAm = [], soDuong = [];
var soChan = [], soLe = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        soAm.push(arr[i]);
    } else {
        soDuong.push(arr[i]);
    }

    if (arr[i] % 2 == 0) {
        soChan.push(arr[i]);
    } else {
        soLe.push([i]);
    }

    if (max < arr[i]) {
        max = arr[i];
    }

    if (min > arr[i]) {
        min = arr[i];
    }



}
var chuoisoAm = soAm.concat();
console.log("So am la: " + chuoisoAm);
var chuoiSoDuong = soDuong.concat();
console.log("So duong la: " + chuoiSoDuong);
var chuoiSoChan = soChan.concat();
console.log("So chan la: " + chuoiSoChan);
var chuoiSoLe = soLe.concat();
console.log("So le la: " + chuoiSoLe);
console.log("So lon nhat la: " + max);
console.log("So nho nhat la: " + min);





