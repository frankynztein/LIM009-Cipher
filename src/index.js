// Introducing HTML elements to JavaScript
const btnEncode = document.getElementById('btn-encode');
const encodedMessage = document.getElementById('encoded-message');
const btnDecode = document.getElementById('btn-decode');
const decodedMessage = document.getElementById('decoded-message');

// CONSTANTS
const asciiCodeUppercase = 65;
const totalStringUppercase = 26;

//ENCODE FUNCTION - FIRST STEP - TAKE INPUT VALUE. ESTO ESTÁ FUNCIONANDO.
btnEncode.addEventListener('click', () => {
    let string = document.getElementById('input-encode').value;
    let offset = parseInt(document.getElementById('encode-offset').value);
    const codedString = cipher.encode(string, offset);
    encodedMessage.innerHTML += codedString;
})

// DECODE FUNCTION
btnDecode.addEventListener('click', () => {
    let string = document.getElementById('input-decode').value;
    let offset = parseInt(document.getElementById('decode-offset').value);
    const decodedString = cipher.decode(string, offset);
    decodedMessage.innerHTML += decodedString;
})