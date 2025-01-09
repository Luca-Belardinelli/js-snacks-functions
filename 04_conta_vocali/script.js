/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function restituisca(vocale) {
   
    //array
    
    const vocali = ['a', 'e', 'i', 'o', 'u',];

    //variabili //calcolo vocali

    var numero = 0;  

    //vocali che troveremo

    var numerovocali = [];

    //ciclo

    for( let i = 0 ; i < vocale.length; i++){

        //salvo le lettere

        let lettere = vocale[i];

        //se la lettera è inclusa nell'array vocali

        if ( vocali.includes(lettere)) {

        //aumento il conteggio

        numero++;

        //salvo le vocali trovate

        numerovocali.push(lettere);

        }

    }

    //unisco tutti gli elemnti dell'array 

    numerovocali = numerovocali.join(', '); 

    //salvo il risultato

    let risultato = `${numero} (${numerovocali})`;

    return risultato

}

// Invoca la funzione qui e stampa il risultato in console

console.log(restituisca(word));



//Risultato atteso se si passa 'javascript': 3 (a, a, i)