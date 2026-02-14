// un array e un contenitore di elementi, che possono essere di qualsiasi tipo, anche di tipi diversi tra loro
// un array e un oggetto, con la differenza che gli elementi di un array sono ordinati, mentre quelli di un oggetto non
//  esiste un modo per accedere a un elemento di un oggetto, se non attraverso la sua chiave, mentre in un array si puo 
// accedere a qualsiasi elemento attraverso il suo indice

let myArray = ['mela', 'banana', 'arancia'];
//console.log(typeof array); // 16
console.log(myArray);
//console.log(myArray[2]); // mela

// pop() ,push(item)  sono due motodi
// pop() rimuove l'ultimo elemento di un array e lo restituisce
// push(item) aggiunge un elemento alla fine di un array e restituisce la nuova lunghezza dell'array
// shift() rimuove il primo elemento di un array e lo restituisce   
// unshift(item) aggiunge un elemento all'inizio di un array e restituisce la nuova lunghezza dell'array
// splice(index, num, item1, item2, ...)  rimuove num elementi a partire dall'indice index e li restituisce in un nuovo array, e aggiunge gli elementi item1, item2, ... a partire dall'indice index
// slice(start, end) restituisce un nuovo array contenente gli elementi da start a end-1
let newArray = myArray.slice(1, 3) // ['banana', 'arancia'] ['mela', 'banana', 'arancia']
//console.log(newArray, myArray); // ['banana', 'arancia'] ['mela', 'banana', 'arancia']
let ohterArray = myArray.splice(1, 2, 'banana', 'arancia') // ['banana', 'arancia'] ['mela'];
console.log(ohterArray, myArray); // ['banana', 'arancia'] ['mela']
let otherFruit = ['kiwi', 'pera', 'pera'];
let oteherFuit = myArray.concat(otherFruit); // ['mela', 'kiwi', 'pera']
console.log(oteherFuit); // ['mela', 'kiwi', 'pera']
// console.log(myArray); // ['mela']
// console.log(otherFruit); // ['kiwi', 'pera']
// console.log(oteherFuit); // ['mela', 'kiwi', 'pera']
// search(item) restituisce true se item e presente in un array, altrimenti restituisce false
// indexOf(item) restituisce l'indice della prima occorrenza di item in un array, o -1 se item non e presente
console.log(oteherFuit.indexOf('pera')); // -1
console.log(oteherFuit.indexOf('pera', 3)); // -1
// lastIndexOf(item) restituisce l'indice dell'ultima occorrenza di item in un array, o -1 se item non e presente
console.log(otherFruit.lastIndexOf('pera', 3)); // 2
// includes(item) restituisce true se item e presente in un array, altrimenti restituisce false
console.log(oteherFuit.includes('pera')); // true
console.log(oteherFuit.includes('limone')); // false


console.log(numercArray.reverse()); // [5, 4, 3, 2, 1]

// split() e join() sono due metodi che permettono di convertire una stringa in un array e viceversa
// split(separator) restituisce un array di sottostringhe, suddividendo la stringa originale in corrispondenza del separatore
// join(separator) restituisce una stringa ottenuta concatenando gli elementi di un array, separati dal separatore  
let myString = numercArray.join('-'); // '5,4,3,2,1'
console.log(myString); // '5,4,3,2,1'

let myNewArray = myString.split('-'); // ['5', '4', '3', '2', '1']
console.log(myNewArray); // ['5', '4', '3', '2', '1']
// console.log(numercArray); // [5, 4, 3, 2, 1]
// console.log(myString); // '5,4,3,2,1'
// console.log(myNewArray); // ['5', '4', '3', '2', '1']

// metodo at(index) restituisce l'elemento all'indice index di un array, o undefined se index e fuori dai limiti dell'array
console.log(numercArray.at(-2));

// parseInt(string) restituisce un numero intero ottenuto convertendo la stringa string, o NaN se la conversione non e possibile
console.log(parseInt('123'));

// parseFloat(string) restituisce un numero a virgola mobile ottenuto convertendo la stringa string, o NaN se la conversione non e possibile
console.log(parseFloat('123.45'));

// math.floor(num) restituisce il più grande intero minore o uguale a num
console.log(Math.floor(3.7)); // 3

// math.ceil(num) restituisce il più piccolo intero maggiore o uguale a num
console.log(Math.ceil(3.7)); // 4
// math.round(num) restituisce l'intero più vicino a num, o num stesso se num e già un intero
console.log(Math.round(3.7)); // 4
// math.random() restituisce un numero pseudo-casuale compreso tra 0 (incluso) e 1 (escluso)
console.log(Math.random()); // 0.123456789
// math.max(num1, num2, ...) restituisce il più grande tra i numeri num1, num2, ...
let numercArray = [1, 2, 3, 4, 5];
console.log(typeof numercArray); // object
console.log(Math.max(1, 2, 3, 4, 5 - 50 - 32 - 40)); // 5
// math.min(num1, num2, ...) restituisce il più piccolo tra i numeri num1, num2, ...
console.log(Math.min(1, 2, 3, 4, 5)); // 1

// stringhe sono un tipo di dato primitivo che rappresenta una sequenza di caratteri, racchiusa tra virgolette singole o doppie
// touperCase() restituisce una nuova stringa con tutti i caratteri convertiti in maiuscolo
let myString2 = 'ciao mondo';
console.log(myString2.toUpperCase());
// toLowerCase() restituisce una nuova stringa con tutti i caratteri convertiti in minuscolo
console.log(myString2.toLowerCase());
// trim() restituisce una nuova stringa con gli spazi bianchi iniziali e finali rimossi
let myString3 = '   ciao mondo   ';
console.log(myString3.trim());
// lingth restituisce la lunghezza di una stringa, ovvero il numero di caratteri che la compongono
console.log(myString2.length); // 10



