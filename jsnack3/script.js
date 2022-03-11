/*Crea due array che hanno un numero di elementi diversi. Aggiungi elementi casuali all’array che ha meno elementi, fino a quando ne avrà tanti quanti l’altro.*/

//creo 2 array
let array1 = [1,3,5,7];
let array2 = [2,4,6,8,10,12];
//creo un ciclo affinchè i due array non hanno la stessa lunghezza
for(let i = 0; i< array2.length; i++){
    if(array1.length !== array2.length){
        array1.push(prompt("inserisci un elemento"));
    }    
}
//verifico la lunghezza dei due array 
console.log(array1.length);
console.log(array2.length);