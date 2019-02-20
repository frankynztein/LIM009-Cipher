// Introducing HTML elements to JavaScript
const btnEncode = document.getElementById('btn-encode');

// TESTING const FOR, ALSO TESTING, FUCTION
const stringUppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const asciiCodeUppercase = 65;
const totalStringUppercase = 26;

// FUNCTION TO ENCODE
// function encode () {
    
// }


// ENCODE FUNCTION - FIRST STEP - TAKE INPUT VALUE
btnEncode.addEventListener('click', () => {
    let stringToEncode = document.getElementById('input-encode').value;
    let encodeOffset = parseInt(document.getElementById('encode-offset').value);
    let asciiCode = stringToEncode.charCodeAt(0);
    let codedString = (asciiCode - 65 + encodeOffset) % 26 + 65;
    console.log(stringToEncode);
    console.log(encodeOffset);
    console.log(codedString);
    })