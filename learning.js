
var ImgArray1 = [
    "images/is_prime-java.PNG",
    "images/is_prime-python.PNG",
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


var ImgArray2 = [
    "images/caesar-java.PNG",
    "images/caesar-python.PNG",
    ];

function changeImg2(imgNum) {
    document.getElementById('caesar-pic').src = ImgArray2[imgNum];
    }

function caesarEncryptionOutput() {
    let input = document.getElementById('caesar-encryption-textbox').value;
    if(input.substring(input.length-1) != ","){
        let str = input.substring(0,input.indexOf(","));
        let shift = parseInt(input.substring(input.indexOf(",")+1));
        let encrypted_message = "";
        let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        let capsLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        for (let i = 0; i < str.length; i++) {
        let originalChar = str[i];
        let lowerCaseChar = originalChar.toLowerCase();
        let newChar='';
        if(lowerCaseChar == (' ')){
            newChar = ' ';
        }
        else if (/[a-z]/i.test(lowerCaseChar)) {
            let charCode = parseInt(lowerCaseChar.charCodeAt(0)); 
            let originalLetterPosition = charCode - 97;
            let shiftedLetterPosition = originalLetterPosition + shift;
            let newIndex = shiftedLetterPosition % 26;
            newChar = letters[newIndex];
            if(originalChar == originalChar.toUpperCase()){
                newChar = capsLetters[newIndex];
            }
        }
        encrypted_message += newChar;
        }
        document.getElementById('caesar-encryption-result').innerHTML =  encrypted_message;
    }
}   

function caesarDecryptionOutput() {
    let input = document.getElementById('caesar-decryption-textbox').value;
    if(input.substring(input.length-1) != ","){
        let str = input.substring(0,input.indexOf(","));
        let shift = 26-parseInt(input.substring(input.indexOf(",")+1));
        let encrypted_message = "";
        let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
        let capsLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        for (let i = 0; i < str.length; i++) {
        let originalChar = str[i];
        let lowerCaseChar = originalChar.toLowerCase();
        let newChar='';
        if(lowerCaseChar == (' ')){
            newChar = ' ';
        }
        else if (/[a-z]/i.test(lowerCaseChar)) {
            let charCode = parseInt(lowerCaseChar.charCodeAt(0)); 
            let originalLetterPosition = charCode - 97;
            let shiftedLetterPosition = originalLetterPosition + shift;
            let newIndex = shiftedLetterPosition % 26;
            newChar = letters[newIndex];
            if(originalChar == originalChar.toUpperCase()){
                newChar = capsLetters[newIndex];
            }
        }
        encrypted_message += newChar;
        }
        document.getElementById('caesar-decryption-result').innerHTML =  encrypted_message;
    }
}    