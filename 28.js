// metodo stringhe
//break e continue
// introduzione agli aggetti
// itroduzione alle funzioni
let esempio = 'hello world';
console.log(typeof esempio); // string
console.log(esempio.length); // 11
console.log(esempio[1]); // 11
console.log(esempio.charAt(34)); // 11

console.log(esempio.toUpperCase()); // 11

let a = 'a'
let b = 'b'
console.log(a > b);

console.log(esempio[0] === 'h'); // true
console.log(esempio[0] === 'H'); // false

console.log(esempio.slice(0, 5)); // 'hello'
console.log(esempio.slice(6)); // 'world'


let saluto = 'ciao raphael come stai?';
//let saluto2 = saluto.replace('raphael', 'mario');
//console.log(saluto2); // 'ciao mario come stai?'
// 'ciao raphael come stai?'
//console.log(saluto2.replace('raphael', 'mario')); // 'ciao mario come stai?'
console.log(saluto.toLocaleLowerCase().replace('raphael', 'Mario').toUpperCase); // 'ciao mario come stai?'
let text1 = 'hello';
let text2 = 'world';

console.log(text1.concat(',', text2, '!!')); // 'hello world'
const inputString = '   hello   ';
console.log(inputString.trim()); // 'hello'
console.log(inputString.trimStart());
console.log(inputString.trimEnd());

let myString = 'hello world';
console.log(myString.length); // 11
console.log(myString.padEnd(15, ' ')); // 'hello world   '
console.log(myString.padStart(15, ' ')); // '   hello world'
console.log(myString.padEnd(15, '*')); // 'hello world***'
console.log(myString.padStart(15, '*')); // '***hello world'


// picolo exercizio
let creditCardNumber = '1234 5678 9012 3456';
let maskedNumber = creditCardNumber.replace(/\d/g, '*');
console.log(maskedNumber); // '**** **** **** ****'

let creditCardNumbers3 = '1234 5678 9012 3456';
let last4Numbers = creditCardNumbers3.slice(-4);
let hiddenNumbers3 = last4Numbers.padStart(16, '*');
console.log(hiddenNumbers3); // '**** **** **** 3456'

// search 
console.log(myString.indexOf('di', 7)); // -1 (not found)
console.log(myString.lastIndexOf('di')); // 7 (found at index 7)
console.log(myString.search('esempio')); // true (found in the string)

//  includes
console.log(myString.includes('esempio')); // true (found in the string)
console.log(myString.includes('esempio', 7)); // false (not found after index 7)
