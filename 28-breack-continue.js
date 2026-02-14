// breack e continue
// ciclo for
//console.log('inizio ciclo for');
//for (let i = 0; i < 1000; i++) {
//    if (i === 50) {
//        break; // esce dal ciclo quando i è uguale a 3
//        //continue; // salta l'iterazione corrente quando i è uguale a 3
//    }
//    console.log(i);
//}
//console.log('fine ciclo for');

numero: for (let i = 0; i < 10; i++) {
    console.log('i:', i);

    for (let j = 0; j < 10; j++) {
        if (j === 5) {
            break numero; // esce dal ciclo esterno quando j è uguale a 5
            //continue numero; // salta l'iterazione corrente del ciclo esterno quando j è uguale a 5
        }
        console.log('j:', j);
    }
    console.log('-----');
}
console.log('fine ciclo for');