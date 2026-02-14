// specificazione tra un array  e altre primitive 
// i striche vemgono svatti via valore(by value) 
let a = 'test';
let b = a;
console.log(a);
console.log(b);
console.log(b === a); // true

a = 'prova '

console.log(a); // 'prova'
console.log(b);

// array
// i array vengono svatti via riferimento(by reference)
let arrA = ['provo']
let arrB = arrA;
console.log(arrA);
console.log(arrB);
console.log(arrB === arrA); // true
console.log(arrA); // ['provo']
arrA = ['test'];
console.log(arrA); // ['test']
console.log(arrB); // ['provo']