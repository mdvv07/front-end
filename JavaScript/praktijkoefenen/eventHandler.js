var button = document.getElementById("create-button");
console.log(button);


var namelist =["Tim", "Escobar", "Tommy", "Bob", "Kevin"];

for (var name in namelist){
    button1 = document.createElement("button");
    
}

button.addEventListener("click", createAnotherElement);

function createAnotherElement() {
    var newElement = document.createElement('img');
    newElement.src = 'peak.jpg';
    document.body.appendChild(newElement);
}