const days = ["Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];

const daysOfWork = [days[0], days[1], days[2], days[3], days[4]];
const TheWeekend = [days[5], days[6]];

function showText(title, text){
    var output = document.getElementById("output");
    output.innerHTML += `<h2>${title}</h2><p>${text}</p>`;
}


showText("All days of The Week;", days.join(", "));


showText("All days of Work;", daysOfWork.join(", "));
showText("The Weekend;", TheWeekend.join(", "));


// Reversed //

showText("Reversed days of week;", [...days].reverse().join(", "));
showText("Reversed days of Work;", [...daysOfWork].reverse().join(", "));
showText("Reversed days of The Weekend;", [...TheWeekend].reverse().join(", "));
