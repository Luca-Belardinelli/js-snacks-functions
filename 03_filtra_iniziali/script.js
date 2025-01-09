/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.

function accetti (arrays, lettera) {

    //array

    var stringhe = [];

    //ciclo della lista

    for ( let i = 0 ; i < arrays.length; i++){

        //nomi lista

        var nomi = arrays[i];
        
        //prima lettera nomi

        var primalettera = nomi.charAt(0);

        //condizione prima lettera uguale alla lettera filtrata

        if (primalettera === lettera) {

            stringhe.push(nomi);
        }

    }

    return stringhe;
}

//Invoca la funzione qui e stampa il risultato in console

console.log(accetti(names, 'A'));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]