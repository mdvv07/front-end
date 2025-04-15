var divisible = ["1","2","3", "4", "5", "6", "7", "8", "9", "10"];
var visible = ["2","4","6","8","10","12","14","16","18","20"];

function add_up(ar1, ar2){
    for (let i = 0; i < ar1.length; i++) {
        let num1 = parseInt(ar1[i]);
        let num2 = parseInt(ar2[i]);
        let sum = num1 + num2;
        console.log(num1 + "+" + num2 + "=" + sum);
    }
}


function substract(ar1, ar2){
    for (let i = 0; i < ar1.length; i++) {
        let num1 = parseInt(ar1[i]);
        let num2 = parseInt(ar2[i]);
        let diff = num2 - num1;
        console.log(num2 + "-" + num1 + "=" + diff);
    }
}

function multiple(ar1, ar2){
    for(let i = 0; i < ar1.length; i++) {
        let num1 = parseInt(ar1[i]);
        let num2 = parseInt(ar2[i]);
        let multi = num1 * num2
        console.log(num1 + "x" + num2 + "=" + multi);
    }
}

function divide(ar1, ar2) {
    for (let i = 0; i < ar1.length; i++) {
        let num1 = parseInt(ar1[i]);
        let num2 = parseInt(ar2[i]);
        let diff = num2 / num1;
        console.log(num2 + ":" + num1 + "=" + diff);
    }
}

add_up(divisible, visible);
console.log("");
substract(divisible, visible);
console.log("");
multiple(divisible, visible);
console.log("");
divide(divisible, visible);
