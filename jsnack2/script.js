/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const word1 = prompt('Inserisci la prima parola');
const word2 = prompt('Inserisci la seconda parola');

if (word1.length < word2.length) {
    console.log(word1, word2);
    console.log(`La parola "${word1}" è più corta della parola "${word2}"`);
    document.querySelector('body').innerHTML = `<div>La parola "${word1}" è più corta della parola "${word2}"</div>`;
} else if (word1.length > word2.length) {
    console.log(word2, word1);
    console.log(`La parola "${word2}" è più corta della parola "${word1}"`);
    document.querySelector('body').innerHTML = `<div>La parola "${word2}" è più corta della parola "${word1}"</div>`;
} else {
    console.log(word1, word2);
    console.log(`Le parole "${word1}" e "${word2}" sono lunghe uguali`);
    document.querySelector('body').innerHTML = `<div>Le parole "${word1}" e "${word2}" sono lunghe uguali</div>`;
}