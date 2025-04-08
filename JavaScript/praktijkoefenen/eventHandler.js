var button = document.getElementById("create-button");
console.log(button);


button.addEventListener("click", createAnotherElement);

function createAnotherElement() {
    var newElement = document.createElement('h1');
    newElement.textContent = 1 + `${0}`;
    document.body.appendChild(newElement);
}