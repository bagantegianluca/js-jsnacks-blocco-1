/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */

const evenNumbers = [];
let checkNumbers = true;

for (let i = 0; i < 6; i++) {
    const userNumber = Number(prompt('Inserisci un numero'));
    if (!isNaN(userNumber)) {
        if (userNumber % 2 == 0) {
            evenNumbers.push(userNumber);
        }
    } else {
        checkNumbers = false;
        break;
        alert(`Hai inserito il valore ${userNumber} che non è un numero.\nMi fermo qui, non cercare di fregarmi!`)
    }
}

if (checkNumbers) {
    console.log(evenNumbers);
    alert(`Nell'array sono stati inseriti i numeri ${evenNumbers}.`);
    document.querySelector('body').innerHTML = `Nell'array sono stati inseriti i numeri ${evenNumbers}.`;
} else {
    console.log("L'utente ha imbrogliato, non ha inserito un numero anche se rischiesto solo numeri");
    alert("L'utente ha imbrogliato, non ha inserito un numero anche se rischiesto solo numeri");
    document.querySelector('body').innerHTML = "L'utente ha imbrogliato, non ha inserito un numero anche se rischiesto solo numeri";
}