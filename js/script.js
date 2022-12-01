const btn = document.getElementById ("start");

const squareBox = document.querySelector ("div.square-box");

btn.addEventListener('click', function(){

    squareBox.innerHTML = "";

    for (let i = 0 ; i < 100 ; i++){
        const AddDiv = getDivElement();
        AddDiv.addEventListener('click', function(){
            AddDiv.classList.toggle("active");
            console.log(i + 1)
        })
        AddDiv.innerText = (i + 1);
        squareBox.append(AddDiv);
    }
    
})

const bombList = [];

while (bombList.length < 16){
    const randomNumberGen = getRandomNumberUnique(bombList, 1, 100);
    bombList.push(randomNumberGen);
}

console.log(bombList)


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