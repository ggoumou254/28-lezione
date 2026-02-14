// pari e dispari
let number = 6;

//let solution  = '';
//if (number % 2 === 1) {
//    solution = 'dispari';
//}else{
//    solution = 'pari';
//}





let resto = number % 2;
let isOdd = Boolean(resto);
let solution = isOdd ? 'dispari' : 'pari';
console.log(solution); // 'pari'


