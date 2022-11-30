//Crea una funzione che accetti due argomenti, e che restituisca un valore numerico randomico tra i due argomenti inclusi.

function getRandomNumber ( firstNumber, secondNumber ) {
    const randomNumber = Math.floor(Math.random() * (firstNumber - secondNumber +1) + secondNumber);
    return randomNumber ;
}




//Crea una funzione che dato un array, calcoli la somma dei suoi elementi.
//const array = [1,2,3,4];

/* function getSumOfArrayElements (array){
    

} */

const array = [1, 33, 55, 64, 33, 22, 10, 44];

function insertElementP (content){
    const newElement = document.createElement('p');
    newElement.innerText = content;
    return newElement;
}


 const greenDiv = document.getElementById('verde');
 const redDiv = document.getElementById ('rosso');

 for(let i=0; i < array.length; i++){
    if (array[i] % 2 == 0){
        greenDiv.appendChild(insertElementP(array[i]));
    } else if (array[i] % 2 ==1){
        redDiv.appendChild(insertElementP(array[i]));
    }
 }
