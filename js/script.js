const btn = document.getElementById ("start");

const squareBox = document.querySelector ("div.square-box");

const scoreElement = document.getElementById("score");

const clickedNumbers = [];

let exitSingleNum;

btn.addEventListener('click', function(){
    let gameStatus = true;
    squareBox.innerHTML = "";
    let bombList = [];
    let score = 0;
    scoreElement.innerText = (score);

 // Inizio il gioco
    for (let i = 0 ; i < 100 ; i++){ // Genero i 100 numeri
        const addDiv = getDivElement();
        addDiv.addEventListener('click', function(){
            if (gameStatus == false) {
                return;
            }
            addDiv.classList.toggle("active");
            console.log(i + 1);
            clickedNumbers.push(i + 1);
            exitSingleNum = i + 1; // Controllo in tempo reale il numero che ho cliccato
            
            
            if (bombList.includes(exitSingleNum)){ // Controllo se un numero nella lista delle bombe è stato cliccato 
                console.log('Bomba');
                scoreElement.innerText = (`Hai perso! Il tuo punteggio è: ${score}`);
                gameStatus = false;
                addDiv.classList.add("boom");
            } else {
                score += 1;
                scoreElement.innerText = (score);
                if (score == (100 - 16)){
                    scoreElement.innerText = ("Hai vinto!");
                    gameStatus = false;
                }
            }
            

        }, {once : true})
        addDiv.innerText = (i + 1);
        squareBox.append(addDiv);
    }
        
    while (bombList.length < 16){//Genero 16 bombe
        const randomNumberGen = getRandomNumberUnique(bombList, 1, 100);
        bombList.push(randomNumberGen);
    }

    console.log(bombList);
    console.log(clickedNumbers);
    console.log(exitSingleNum);
})



// ----------------- FUNCTIONS ----------------- //

function getDivElement (){
    const divElement = document.createElement ("div");
    divElement.classList.add("square");
    return divElement;
}

function getRandomNumber(firstNumber, secondNumber){
    const numberRandom = Math.floor(Math.random() * (secondNumber - firstNumber + 1) + firstNumber);
    return numberRandom;
}

function getRandomNumberUnique (blacklist, min, max){
    let isValid = false;
    let randomNum;

    while (isValid == false){
        randomNum = getRandomNumber(min, max);

        if (!blacklist.includes(randomNum)){
            isValid = true;
        }
    }

    return randomNum;
}