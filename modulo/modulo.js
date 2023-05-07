function moduloResult() {
    event.preventDefault();
    let num = document.getElementById("num").value;
    let modulo = document.getElementById("modulo").value;
    let answer = num % modulo;
    document.getElementById("modulo-result").innerHTML = num + " mod " + modulo + " = " + answer;
    if(isNaN(answer)){
        document.getElementById("modulo-result").innerHTML = "Incorrect input!"
    }
}

function moduloInverseResult() {
    function isInt(value) {
        return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
      }
    event.preventDefault();
    let firstNum = document.getElementById("first-num").value;
    let modulo = document.getElementById("modulo-2").value;
    if(!isInt(firstNum) | !isInt(modulo)){
        document.getElementById("modulo-inverse-result").innerHTML = "Incorrect input or one of the numbers is too long!";
        return;
    }

    let currentResult = (firstNum * 1) % modulo
    let answer = 1;
    while(currentResult != 1) {
        if(answer == 100000000) {
            document.getElementById("modulo-inverse-result").innerHTML = "The inverse modulo doesn't exist or the calculations took too long!";
            return;
        }
        answer++;
        currentResult = (firstNum * answer) % modulo;
    }
    document.getElementById("modulo-inverse-result").innerHTML = "b = " + answer;
}