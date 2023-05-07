var ImgArray2 = [
    "../images/caesar-java.PNG",
    "../images/caesar-python.PNG",
    ];

function changeImg2(imgNum) {
    document.getElementById('caesar-pic').src = ImgArray2[imgNum];
    }

function caesarEncryptionOutput() {
    let input = document.getElementById('caesar-encryption-textbox-1').value;
    let shift = document.getElementById('caesar-encryption-textbox-2').value;
    const regex = /[^a-zA-Z\s]/;
    const regex2 = /\D/;
    if(regex.test(input) | regex2.test(shift) | input.length === 0 | shift.length === 0){
        document.getElementById('caesar-encryption-result').innerHTML =  "Incorrect input!";
        return;
    }
    let encrypted_message = "";
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let capsLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for (let i = 0; i < input.length; i++) {
    let originalChar = input[i];
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

function caesarDecryptionOutput() {
    let input = document.getElementById('caesar-decryption-textbox-1').value;
    let shift = document.getElementById('caesar-decryption-textbox-2').value;
    console.log(input);
    console.log(shift);
    const regex = /[^a-zA-Z\s]/;
    const regex2 = /\D/;
    if(regex.test(input) | regex2.test(shift) | input.length === 0 | shift.length === 0){
        document.getElementById('caesar-decryption-result').innerHTML =  "Incorrect input!";
        return;
    }
    let decrypted_message = "";
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let capsLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for (let i = 0; i < input.length; i++) {
    let originalChar = input[i];
    let lowerCaseChar = originalChar.toLowerCase();
    let newChar='';
    if(lowerCaseChar == (' ')){
        newChar = ' ';
    }
    else if (/[a-z]/i.test(lowerCaseChar)) {
        let charCode = parseInt(lowerCaseChar.charCodeAt(0)); 
        let originalLetterPosition = charCode - 97;
        let shiftedLetterPosition = originalLetterPosition - shift;
        let newIndex = shiftedLetterPosition % 26;
        newChar = letters[newIndex];
        if(originalChar == originalChar.toUpperCase()){
            newChar = capsLetters[newIndex];
        }
    }
    decrypted_message += newChar;
    }
    document.getElementById('caesar-decryption-result').innerHTML =  decrypted_message;
} 