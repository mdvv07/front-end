function fibonacci(n=20){
    let array = [0, 1];
    for (var i = 2; i <= n; i++){
        array[i] = array[i - 1] + array[i - 2];
    }
    return array;
}

console.log(fibonacci(20));

