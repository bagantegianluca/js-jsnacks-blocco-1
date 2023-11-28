/* Snack 1: 
L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const number1 = Number(prompt('Inserisci il primo numero'));
const number2 = Number(prompt('Inserisci il secondo numero'));

if (number1 > number2) {
    console.log(number1);
    console.log(`Il primo numero inserito (${number1}) è maggiore del secondo (${number2})`);
    document.querySelector('body').innerHTML = `<div>Il primo numero inserito (${number1}) è maggiore del secondo (${number2})</div>`;
} else if (number1 < number2) {
    console.log(number2);
    console.log(`Il secondo numero inserito (${number2}) è maggiore del primo (${number1})`);
    document.querySelector('body').innerHTML = `<div>Il secondo numero inserito (${number2}) è maggiore del primo (${number1})</div>`;
} else {
    console.log(number1, number2);
    console.log(`Il primo numero inserito (${number1}) è uguale al secondo (${number2})`);
    document.querySelector('body').innerHTML = `<div>Il primo numero inserito (${number1}) è uguale al secondo (${number2})</div>`;
}

