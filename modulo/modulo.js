function moduloResult() {
    event.preventDefault();
    let num = Number(document.getElementById("num").value);
    let moduloWithOriginalSign = Number(document.getElementById("modulo").value);
    let modulo = Math.abs(moduloWithOriginalSign);
    if(num.toString().length > 20 | moduloWithOriginalSign.toString().length > 20){
        document.getElementById("modulo-result").innerHTML = "One of the numbers is too big!"
        return;
    }
    let answer = num % modulo;2
    if(moduloWithOriginalSign > 0){
        while(answer < 0){
            answer += modulo;
        }
    }
    else{
        while(answer > 0){
            answer -= modulo;
        }
    }
    document.getElementById("modulo-result").innerHTML = num + " mod " + moduloWithOriginalSign + " = " + answer;
    if(isNaN(answer)){
        document.getElementById("modulo-result").innerHTML = "Incorrect input!"
    }
}

function moduloInverseResult() {
    event.preventDefault();
    let firstNum = Number(document.getElementById("first-num").value);
    let modulo =  Number(document.getElementById("modulo-2").value);
    if(!Number.isInteger(firstNum) | !Number.isInteger(modulo)){
        document.getElementById("modulo-inverse-result").innerHTML = "Incorrect input!";
        return;
    }

    let currentResult = (firstNum * 1) % modulo
    let answer = 1;
    while(currentResult != 1) {
        if(answer == 100000000) {
            document.getElementById("modulo-inverse-example").innerHTML = firstNum + "<sup>-1</sup> b " + "modulo " + modulo;
            document.getElementById("modulo-inverse-result").innerHTML = "The inverse modulo doesn't exist or the calculations took too long!";
            return;
        }
        answer++;
        currentResult = (firstNum * answer) % modulo;
    }
    document.getElementById("modulo-inverse-result").innerHTML = "b = " + answer;
    document.getElementById("modulo-inverse-example").innerHTML = firstNum + "<sup>-1</sup> b " + "modulo " + modulo;
}

function powerModResult() {
    event.preventDefault();
    let baseOriginal = Number(document.getElementById("base").value);
    let exponentOriginal = Number(document.getElementById("exponent").value);
    let moduloOriginal = Number(document.getElementById("modulo-3").value);
    let base = baseOriginal;
    let exponent = exponentOriginal;
    let modulo = moduloOriginal;
	if(!Number.isInteger(base) | !Number.isInteger(exponent) | !Number.isInteger(modulo)) {
		document.getElementById('modulo-power-mod-result').innerHTML = "Incorrect input!"
		return;
	}
	let res = 1;
    base = base % modulo;
    while (exponent > 0) {
    	if (exponent % 2 == 1) {
           res = (res * base) % modulo;
    	}
    	exponent = Math.floor(exponent / 2);
    	base = (base * base) % modulo;
  	}
	document.getElementById('modulo-power-mod-result').innerHTML = baseOriginal + "<sup>" + exponentOriginal + "</sup> modulo " + moduloOriginal + " = " + res;
}

function eulersTotientResult() {
    event.preventDefault();
    let original = document.getElementById("euler-num").value;
    let n = original;
    let result = n;
    for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) {
          while (n % i === 0) {
            n /= i;
          }
          result -= result / i;
        }
      }
    if (n > 1) {
        result -= result / n;
    }
    document.getElementById("eulers-totient-result").innerHTML = "phi(" + original  + ") = " + result;
    if(isNaN(result) | original.length > 20){
        document.getElementById("eulers-totient-result").innerHTML = "incorrect input or the number is too long!";
    }
}

