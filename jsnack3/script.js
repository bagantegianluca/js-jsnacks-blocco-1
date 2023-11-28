/* Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti. */

let total = 0;

for (let i = 1; i <= 10; i++) {
    const userNumber = Number(prompt(`Inserisci il ${i}° numero`));
    total += userNumber;
}

console.log(`La somma totale di tutti i numeri inputati è ${total}`);
document.querySelector('body').innerHTML = `La somma totale di tutti i numeri inputati è ${total}`