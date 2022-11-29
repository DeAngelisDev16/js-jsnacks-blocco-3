//Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.

function getRandomNumber ( firstNumber, secondNumber ) {
    const randomNumber = Math.floor(Math.random() * (firstNumber - secondNumber +1) + secondNumber);
    return randomNumber ;
}




//Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
//const array = [1,2,3,4];

/* function getSumOfArrayElements (array){
    

} */
