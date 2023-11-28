/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

const guestsList = ['Jerry', 'John', 'Julia', 'James', 'Jeremy', 'Jessica'];

const guestName = prompt('Inserisci il tuo nome per sapere se sei invitato alla festa:');
let checkInvite = false;

for (let i = 0; i < guestsList.length; i++) {
    if (guestName.toUpperCase() === guestsList[i].toUpperCase()) {
        checkInvite = true;
    }
}
if (checkInvite) {
    console.log(`BENVENUTO/A ${guestName}!\nTi auguriamo una buona festa.`);
    alert(`BENVENUTO/A ${guestName}!\nTi auguriamo una buona festa.`);
    document.querySelector('body').innerHTML = `BENVENUTO/A ${guestName}!\nTi auguriamo una buona festa.`;
} else {
    console.log(`ARRIVEDERCI ${guestName}!\nPurtroppo non sei stato invitato alla festa.`);
    alert(`ARRIVEDERCI ${guestName}!\nPurtroppo non sei stato invitato alla festa.`);
    document.querySelector('body').innerHTML = `ARRIVEDERCI ${guestName}!\nPurtroppo non sei stato invitato alla festa.`;
}