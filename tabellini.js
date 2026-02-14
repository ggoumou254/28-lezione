// array tabellina
//ar arrTabellina = [[1,2,3,4], [5,6,7,8]];
var arrayTabellina = []

// prendo  il numero da 0 a 10
for (let i = 0; i <= 10; i++) {
    //console.log('tabellina del', i);
    tabellina = [];

    // ciclo su numero da 0 a 10
    for (let j = 0; j <= 10; j++) {
        // devo inserire in tabellina la moltiplicazione
        tabellina.push(i * j);
        //console.log('j', j)

    }
    console.log('tabellina', tabellina);
    // aggiorno l'arrTbellina  inserendo larray tebelina
    arrayTabellina.push(tabellina);
}
//console.log('arrayTabellina', arrayTabellina);
console.table(arrayTabellina);
console.table(arrayTabellina[5][4]);


let fruite = ['mela-roosa ',
    ['mela', 'banana', 'arancia'],
    'pera', 'kiwi'];
console.log(fruite);
console.log(fruite[2]); // 'pera'
console.log(fruite[1][0]); // 'mela'
console.log(fruite[1][1]); // 'banana'
console.log(fruite[1][2]); // 'arancia'

