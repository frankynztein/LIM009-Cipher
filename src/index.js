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
    let asciiCodedString = (asciiCode - asciiCodeUppercase + encodeOffset) % totalStringUppercase + asciiCodeUppercase;
    let codedString = String.fromCharCode(asciiCodedString);
    document.getElementById('encoded-message').innerHTML = codedString;
    console.log(stringToEncode);
    console.log(encodeOffset);
    console.log(asciiCode);
    console.log(asciiCodedString);
    console.log(codedString);
    })