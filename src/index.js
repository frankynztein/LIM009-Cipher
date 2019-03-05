// Introducing HTML elements to JavaScript
const welcomeArea = document.getElementById('welcome-area');
const btnEnglish = document.getElementById('btn-english');
const btnTeachMe = document.getElementById('btn-teachme');
const teachMeScreen = document.getElementById('teachme-screen');
const btnLetsCipher = document.getElementById('btn-letscipher');
const encodeScreen = document.getElementById('encode-screen');
const decodeScreen = document.getElementById('decode-screen');
const offsetScreen = document.getElementById('offset-screen');
const inputEncode = document.getElementById('input-encode');
const inputDecode = document.getElementById('input-decode');
const encodeOffset = document.getElementById('encode-offset');
const decodeOffset = document.getElementById('decode-offset');
const btnEncode = document.getElementById('btn-encode');
const btnDecode = document.getElementById('btn-decode');
const showMessage = document.getElementById('show-message');
const btnCopy = document.getElementById('btn-copy');
const btnReset1 = document.getElementById('btn-reset-1');
const btnReset2 = document.getElementById('btn-reset-2');
const btnReset3 = document.getElementById('btn-reset-3');

// FUNCTION COPY
function copyMessage() {
    var copyText = showMessage;
    copyText.select();
    document.execCommand("copy");
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
}

// ENGLISH BUTTON
btnEnglish.addEventListener('click', () => {
    welcomeArea.style.display = 'none';
    encodeScreen.style.display = 'block';
    decodeScreen.style.display = 'block';
    offsetScreen.style.display = 'block';
})

// TEACHME BUTTON
btnTeachMe.addEventListener('click', () => {
    welcomeArea.style.display = 'none';
    teachMeScreen.style.display = 'block';
})

// LET'S CIPHER BUTTON
btnLetsCipher.addEventListener('click', () => {
    teachMeScreen.style.display = 'none';
    encodeScreen.style.display = 'block';
    decodeScreen.style.display = 'block';
    offsetScreen.style.display = 'block';
})

//ENCODE BUTTON
btnEncode.addEventListener('click', () => {
    let string = inputEncode.value;
    let offset = parseInt(encodeOffset.value);
    showMessage.innerHTML = '';
    const codedString = cipher.encode(string, offset);
    showMessage.innerHTML += codedString;
})

// DECODE BUTTON
btnDecode.addEventListener('click', () => {
    let string = inputDecode.value;
    let offset = parseInt(decodeOffset.value);
    showMessage.innerHTML = '';
    const decodedString = cipher.decode(string, offset);
    showMessage.innerHTML += decodedString;
})

// RESET BUTTONS
btnReset1.addEventListener('click', () => {
    inputEncode.value = '';
    encodeOffset.value = '';
})

btnReset2.addEventListener('click', () => {
    inputDecode.value = '';
    decodeOffset.value = '';
})

btnReset3.addEventListener('click', () => {
    showMessage.value = '';
})

// COPY BUTTON
btnCopy.addEventListener('click', () => {
    copyMessage();
})