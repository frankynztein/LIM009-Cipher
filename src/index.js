// Introducing HTML elements to JavaScript
const btnEncode = document.getElementById('btn-encode');
const encodedMessage = document.getElementById('encoded-message');

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