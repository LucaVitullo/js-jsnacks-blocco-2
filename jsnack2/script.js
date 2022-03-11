/*Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti. Esegui questo programma in due versioni, con il for e con il while.*/

///VERSIONE CON IL FOR///

/*let somma=0;
for(let i = 0; i < 5; i++){
    let numero =parseInt(prompt("inserisci il numero"));
    somma += numero;
} 
console.log(somma);*/

///VERSIONE CON IL WHILE//
let somma=0;
let i = 0;
while(i <5){
    let numero =parseInt(prompt("inserisci il numero"));
    somma += numero;
    i++;

}


console.log(somma);
