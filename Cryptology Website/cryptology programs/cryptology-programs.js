var ImgArray1 = [
    "../images/is_prime-java.PNG",
    "../images/is_prime-python.PNG",
    ];
function changeImg1(imgNum) {
    document.getElementById('is_prime-pic').src = ImgArray1[imgNum];
    }

function is_primeOutput() {
    var inputValue = document.getElementById('is_prime-textbox').value;
    if(isNaN(inputValue)) {
        document.getElementById('is_prime-result').innerHTML =  false;
        return;
    } 
    if (inputValue <= 1) {
        document.getElementById('is_prime-result').innerHTML =  false;
        return;
      }
    
    for (let i = 2; i <= Math.sqrt(inputValue); i++) {
        if (inputValue % i === 0) {
            document.getElementById('is_prime-result').innerHTML =  false;
            return;
        }
      }
      document.getElementById('is_prime-result').innerHTML =  true;
   
    }