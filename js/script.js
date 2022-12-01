const btn = document.getElementById ("start");

const squareBox = document.querySelector ("div.square-box");

const scoreElement = document.getElementById("score");

const clickedNumbers = [];

let gameStatus = false;

let score = 0;

btn.addEventListener('click', function(){


    squareBox.innerHTML = "";

    gameStatus = true;

    for (let i = 0 ; i < 100 ; i++){
        const addDiv = getDivElement();
        addDiv.addEventListener('click', function(){
            addDiv.classList.toggle("active");
            console.log(i + 1);
            clickedNumbers.push(i + 1);
            score += 1;
            scoreElement.innerText = (score);
        })
        addDiv.innerText = (i + 1);
        squareBox.append(addDiv);
    }
    
    const bombList = [];
    
    while (bombList.length < 16){
        const randomNumberGen = getRandomNumberUnique(bombList, 1, 100);
        bombList.push(randomNumberGen);
    }

    console.log(bombList);
    console.log(clickedNumbers);

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