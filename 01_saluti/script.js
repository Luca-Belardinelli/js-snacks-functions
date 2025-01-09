/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function hello(name) {

    var hello = "Ciao" + " " + name;

    return hello
}

// Invoca la funzione qui e stampa il risultato in console

let cordiale = hello(userName);

console.log(cordiale);


//Risultato atteso se si passa 'Mario': // ciao Mario
