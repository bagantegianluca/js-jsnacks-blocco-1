/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

let guestsList = ['Jerry', 'John', 'Julia', 'James', 'Jeremy', 'Jessica'];

//Converto elementi array in UpperCase
guestsList = guestsList.map(function (x) { return x.toUpperCase(); })

const guestName = prompt('Inserisci il tuo nome per sapere se sei invitato alla festa:');

/* METODO CICLO
 let checkInvite = false;

for (let i = 0; i < guestsList.length; i++) {
    if (guestName.toUpperCase() === guestsList[i].toUpperCase()) {
        checkInvite = true;
    } 
}*/

// METODO Includes
if (guestsList.includes(guestName.toUpperCase())) {
    console.log(`BENVENUTO/A ${guestName}!\nTi auguriamo una buona festa.`);
    alert(`BENVENUTO/A ${guestName}!\nTi auguriamo una buona festa.`);
    document.querySelector('body').innerHTML = `BENVENUTO/A ${guestName}!\nTi auguriamo una buona festa.`;
} else {
    console.log(`ARRIVEDERCI ${guestName}!\nPurtroppo non sei stato invitato alla festa.`);
    alert(`ARRIVEDERCI ${guestName}!\nPurtroppo non sei stato invitato alla festa.`);
    document.querySelector('body').innerHTML = `ARRIVEDERCI ${guestName}!\nPurtroppo non sei stato invitato alla festa.`;
}