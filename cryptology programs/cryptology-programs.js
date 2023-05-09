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

var ImgArray1 = [
     "../images/is_prime-java.PNG",
    "../images/is_prime-python.PNG",
    ];
function changeImg1(imgNum) {
    document.getElementById('is_prime-pic').src = ImgArray1[imgNum];
    document.getElementById('is_prime-pic').width = 600;
    document.getElementById('is_prime-pic').height = 600;
}    

var ImgArray2 = [
    "../images/caesar-java.PNG",
    "../images/caesar-python.PNG",
    ];
    
function changeImg2(imgNum) {
    document.getElementById('caesar-pic').src = ImgArray2[imgNum];
    document.getElementById('caesar-pic').width = 600;
    document.getElementById('caesar-pic').height = 600;
}

var ImgArray3 = [
    "../images/coprime-checker-java.PNG",
    "../images/coprime-checker-python.PNG",
    ];
    
function changeImg3(imgNum) {
    document.getElementById('coprime-pic').src = ImgArray3[imgNum];
    document.getElementById('coprime-pic').width = 800;
    document.getElementById('coprime-pic').height = 400;
}

var ImgArray4 = [
    "../images/eulers-totient-java.PNG",
    "../images/eulers-totient-python.PNG",
    ];
    
function changeImg4(imgNum) {
    document.getElementById('eulers-pic').src = ImgArray4[imgNum];
    document.getElementById('eulers-pic').width = 600;
    document.getElementById('eulers-pic').height = 400;
}