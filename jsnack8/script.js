/* Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */

const userNumber = prompt('Inserisci un numero di 4 cifre (non imbrogliare perchè controllo)');
let total = 0;
let digits = [];

if (!isNaN(Number(userNumber)) && userNumber.length == 4) {
    for (let i = 0; i < userNumber.length; i++) {
        digits.push(Number(userNumber[i]));
        total += Number(userNumber[i]);
    }
    console.log(digits);
    console.log(`La somma delle singole cifre del numero "${userNumber}" è:\n${digits[0]} + ${digits[1]} + ${digits[2]} + ${digits[3]} = ${total}`);
    alert(`La somma delle singole cifre del numero "${userNumber}" è:\n${digits[0]} + ${digits[1]} + ${digits[2]} + ${digits[3]} = ${total}`);
    document.querySelector('body').innerHTML = `La somma delle singole cifre del numero "${userNumber}" è:\n${digits[0]} + ${digits[1]} + ${digits[2]} + ${digits[3]} = ${total}`;
} else {
    console.log(`Ti avevo avvisato che ti avrei beccato imbroglione!\nDoveva essere un numero a 4 cifre, ma tu hai inserito "${userNumber}"`);
    alert(`Ti avevo avvisato che ti avrei beccato imbroglione!\nDoveva essere un numero a 4 cifre, ma tu hai inserito "${userNumber}"`);
    document.querySelector('body').innerHTML = `Ti avevo avvisato che ti avrei beccato imbroglione!\nDoveva essere un numero a 4 cifre, ma tu hai inserito "${userNumber}"`;
}
