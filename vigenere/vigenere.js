function vigenereEncryptionOutput() {
    let input = document.getElementById('vigenere-encryption-textbox-1').value;
    let shift = document.getElementById('vigenere-encryption-textbox-2').value;
    const regex = /^[a-zA-Z]+$/;
    if(!regex.test(shift) | input.length === 0 | shift.length === 0){
        document.getElementById('vigenere-encryption-result').innerHTML =  "Incorrect input!";
        return;
    }
    let encrypted_message = "";
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let capsLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for (let i = 0; i < input.length; i++) {
    let originalChar = input[i];
    let lowerCaseOriginalChar = originalChar.toLowerCase();
    let shiftChar = shift[i % (shift.length) ];
    let lowerCaseShiftChar = shiftChar.toLowerCase();
    let newChar='';
    if(!regex.test(originalChar) ){
        newChar = originalChar;
        encrypted_message += newChar;
    }
    else {
        let originalCharCode = parseInt(lowerCaseOriginalChar.charCodeAt(0)); 
        let shiftCharCode = parseInt(lowerCaseShiftChar.charCodeAt(0)); 
        let originalCharPosition = originalCharCode - 97;
        let shiftCharPosition = shiftCharCode - 97;
        let newIndex = ((originalCharPosition + shiftCharPosition + 1) % 26);
        newChar = letters[newIndex];
        if(originalChar == originalChar.toUpperCase()){
            newChar = capsLetters[newIndex];
        }
        encrypted_message += newChar;
        }

    }
    document.getElementById('vigenere-encryption-result').innerHTML =  encrypted_message;
}   

function vigenereDecryptionOutput() {
    let input = document.getElementById('vigenere-decryption-textbox-1').value;
    let shift = document.getElementById('vigenere-decryption-textbox-2').value;
    const regex = /^[a-zA-Z]+$/;
    if(!regex.test(shift) | input.length === 0 | shift.length === 0){
        document.getElementById('vigenere-decryption-result').innerHTML =  "Incorrect input!";
        return;
    }
    let decrypted_message = "";
    let letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let capsLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    for (let i = 0; i < input.length; i++) {
    let originalChar = input[i];
    let lowerCaseOriginalChar = originalChar.toLowerCase();
    let shiftChar = shift[i % (shift.length) ];
    let lowerCaseShiftChar = shiftChar.toLowerCase();
    let newChar='';
    if(!regex.test(originalChar) ){
            newChar = originalChar;
            decrypted_message += newChar;
        }
    else {
        let originalCharCode = parseInt(lowerCaseOriginalChar.charCodeAt(0)); 
        let shiftCharCode = parseInt(lowerCaseShiftChar.charCodeAt(0)); 
        let originalCharPosition = originalCharCode - 97;
        let shiftCharPosition = shiftCharCode - 97;
        let newIndex = (((originalCharPosition - shiftCharPosition - 1) % 26) + 26) % 26;
        newChar = letters[newIndex];
        if(originalChar == originalChar.toUpperCase()){
            newChar = capsLetters[newIndex];
        }
        decrypted_message += newChar;
        }
    }
    document.getElementById('vigenere-decryption-result').innerHTML =  decrypted_message;
} 