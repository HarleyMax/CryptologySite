function stringToBinary(str) {
    let binary = "";
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      const binaryCode = charCode.toString(2).padStart(8, '0');
      binary += binaryCode;
    }
    return binary;
  }

  function binaryToString(binary) {
    let str = '';
    for (let i = 0; i < binary.length; i += 8) {
      const byte = binary.slice(i, i + 8);
      const charCode = parseInt(byte, 2);
      console.log(charCode);
      if(charCode > 31){
      str += String.fromCharCode(charCode);
      }
      else{
        str += "?"
      }
    }
    return str;
  }

  function xor(binary1, binary2) {
    let result = "";
    for (let i = 0; i < binary1.length; i++) {
      const bit1 = binary1.charAt(i);
      const bit2 = binary2.charAt(i % binary2.length);
      const xoredBit = bit1 ^ bit2;
      result += xoredBit;
    }
    return result;
  }

function XorEncryptionOutput() {
	let message = document.getElementById('message-textbox').value;
    let key = document.getElementById('key-textbox').value;
    let binaryMessage = stringToBinary(message);
    let binaryKey = stringToBinary(key);
    let encryptedBinary = xor(binaryMessage, binaryKey);
    let encryptedMessage = binaryToString(encryptedBinary);
    document.getElementById('xor-encryption-result').innerHTML = encryptedMessage;
    if(document.getElementById('xor-encryption-result').innerHTML == "") {
        document.getElementById('xor-encryption-result').innerHTML = "No output!"
    }
}