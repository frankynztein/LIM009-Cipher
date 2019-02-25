// Introducing HTML elements to JavaScript
const btnToEncode = document.getElementById('btn-to-encode');
const btnToDecode = document.getElementById('btn-to-decode');
const btnHowTo = document.getElementById('btn-how-to');
const howToScreen = document.getElementById('how-to-screen');
const btnEncode = document.getElementById('btn-encode');
const encodedMessage = document.getElementById('encoded-message');
const btnDecode = document.getElementById('btn-decode');
const decodedMessage = document.getElementById('decoded-message');
const divRoot = document.getElementById('root');
const encodeScreen = document.getElementById('encode-screen');
const decodeScreen = document.getElementById('decode-screen');
const encodedScreen = document.getElementById('encoded-screen');
const decodedScreen = document.getElementById('decoded-screen');
const btnToEncode2 = document.getElementById('btn-to-encode-2');
const btnToDecode2 = document.getElementById('btn-to-decode-2');
const btnToEncode3 = document.getElementById('btn-to-encode-3');
const btnToDecode3 = document.getElementById('btn-to-decode-3');
const btnToEncode4 = document.getElementById('btn-to-encode-4');
const btnToDecode4 = document.getElementById('btn-to-decode-4');

// MAIN SCREEN
btnToEncode.addEventListener('click', () => {
    divRoot.style.display = 'none';
    encodeScreen.style.display = 'block';
})

btnToDecode.addEventListener('click', () => {
    divRoot.style.display = 'none';
    decodeScreen.style.display = 'block';
})

// HOW TO SCREEN
btnHowTo.addEventListener('click', () => {
    divRoot.style.display = 'none';
    howToScreen.style.display = 'block';
})

btnToEncode2.addEventListener('click', () => {
    howToScreen.style.display = 'none';
    encodeScreen.style.display = 'block';
})

btnToDecode2.addEventListener('click', () => {
    howToScreen.style.display = 'none';
    decodeScreen.style.display = 'block';
})

//ENCODE FUNCTION
btnEncode.addEventListener('click', () => {
    let string = document.getElementById('input-encode').value;
    let offset = parseInt(document.getElementById('encode-offset').value);
    const codedString = cipher.encode(string, offset);
    encodedMessage.innerHTML += codedString;
    document.getElementById("encode-form").reset();
    encodeScreen.style.display = 'none';
    encodedScreen.style.display = 'block';
})

// DECODE FUNCTION
btnDecode.addEventListener('click', () => {
    let string = document.getElementById('input-decode').value;
    let offset = parseInt(document.getElementById('decode-offset').value);
    const decodedString = cipher.decode(string, offset);
    decodedMessage.innerHTML += decodedString;
    document.getElementById("decode-form").reset();
    decodeScreen.style.display = 'none';
    decodedScreen.style.display = 'block';
})

// ENCODED MESSAGE SCREEN
btnToEncode3.addEventListener('click', () => {
    encodedMessage.innerHTML = '';
    encodedScreen.style.display = 'none';
    encodeScreen.style.display = 'block';
})

btnToDecode3.addEventListener('click', () => {
    decodedMessage.innerHTML = '';
    encodedScreen.style.display = 'none';
    decodeScreen.style.display = 'block';
})

// DEOCDED MESSAGE SCREEN
btnToEncode4.addEventListener('click', () => {
    encodedMessage.innerHTML = '';
    decodedScreen.style.display = 'none';
    encodeScreen.style.display = 'block';
})

btnToDecode4.addEventListener('click', () => {
    decodedMessage.innerHTML = '';
    decodedScreen.style.display = 'none';
    decodeScreen.style.display = 'block';
})