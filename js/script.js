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



// ----------------- FUNCTIONS ----------------- //

function getDivElement (){
    const divElement = document.createElement ("div");
    divElement.classList.add("square");
    return divElement;
}

