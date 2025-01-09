/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

function iniziali(nomi){

    // variabile vuota flag

    var storia = '';

    // ciclo

    for( let i = 0 ; i < nomi.length ; i++ ){

        // salvo nella variabile i singoli nomi della lista 
        
        var cose = nomi[i];
         
        // prima lettera dei nomi

        var iniziale = cose.charAt(0);

        // inserisco nella variabile 

        storia = `${storia} "${iniziale}",`;
        
    }

    return storia;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(iniziali(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]