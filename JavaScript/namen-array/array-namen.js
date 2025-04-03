const names = [];
let count_names = parseInt(prompt("How much names you want to put in a array? (Min. 3)"));

while (count_names < 3) {
    count_names = parseInt(prompt("Put in a valid value of names. (Min. 3)"));
}

for (let i = 0; i < count_names; i++) {
    let name = prompt(`Put in name ${i + 1}`);
    names.push(name);
}

const NamesList = document.getElementById("names-list");
const NamesReversed = document.getElementById("names-reversed");

names.forEach(name => {
    let li = document.createElement("li");
    li.textContent = name;
    NamesList.appendChild(li);
});

names.reverse().forEach(name => {
    let li = document.createElement("li");
    li.textContent = name;
    NamesReversed.appendChild(li);
});