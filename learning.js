
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
    let str = input.substring(0,input.indexOf(","));
    let shift = parseInt(input.substring(input.indexOf(",")+1));
    let encrypted_message = "";
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let newChar='';
      if(char == (' ')){
        newChar = ' ';
    }
      else if (/[a-z]/i.test(char)) {
        let charCode = parseInt(str.charCodeAt(i)); 
        let originalLetterPosition = charCode - 97;
        let shiftedLetterPosition = originalLetterPosition + shift;
        let newIndex = shiftedLetterPosition % 26;
        console.log("charCode:" + charCode);
        console.log("originalLetterPosition:" + originalLetterPosition);
        console.log("shiftedLetterPosition:" + shiftedLetterPosition);
        console.log("newIndex:" + newIndex);
        newChar = letters[newIndex];
        
      }
      encrypted_message += newChar;
    }
    document.getElementById('caesar-encryption-result').innerHTML =  encrypted_message;
}   

function caesarDecryptionOutput() {
    let input = document.getElementById('caesar-decryption-textbox').value;
    let str = input.substring(0,input.indexOf(","));
    let shift = 26 - parseInt(input.substring(input.indexOf(",")+1));
    let decrypted_message = "";
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      let newChar='';
      if(char == (' ')){
        newChar = ' ';
    }
      else if (/[a-z]/i.test(char)) {
        let charCode = parseInt(str.charCodeAt(i)); 
        let originalLetterPosition = charCode - 97;
        let shiftedLetterPosition = originalLetterPosition + shift;
        let newIndex = shiftedLetterPosition % 26;
        console.log("charCode:" + charCode);
        console.log("originalLetterPosition:" + originalLetterPosition);
        console.log("shiftedLetterPosition:" + shiftedLetterPosition);
        console.log("newIndex:" + newIndex);
        newChar = letters[newIndex];
        
      }
      decrypted_message += newChar;
    }
    document.getElementById('caesar-decryption-result').innerHTML =  decrypted_message;
}    