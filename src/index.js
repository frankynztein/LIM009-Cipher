// Introducing HTML elements to JavaScript
const inputEncode = document.getElementById('input-encode');
const btnEncode = document.getElementById('btn-encode');
const btnDecode = document.getElementById('btn-decode');
const showMessage = document.getElementById('show-message');
const btnCopy = document.getElementById('btn-copy');
const btnReset1 = document.getElementById('btn-reset-1');
const btnReset2 = document.getElementById('btn-reset-2');
const btnReset3 = document.getElementById('btn-reset-3');

// COPY FUNCTION
function copyMessage() {
    var copyText = showMessage;
    copyText.select();
    document.execCommand("copy");
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied";
}

// function tooltipFunction() {
//     var tooltip = document.getElementById("myTooltip");
//     tooltip.innerHTML = "Copy to clipboard";
// }

//ENCODE FUNCTION
btnEncode.addEventListener('click', () => {
    let string = inputEncode.value;
    let offset = parseInt(document.getElementById('encode-offset').value);
    showMessage.innerHTML = '';
    const codedString = cipher.encode(string, offset);
    showMessage.innerHTML += codedString;
    // document.getElementById("encode-form").reset();
})

// DECODE FUNCTION
btnDecode.addEventListener('click', () => {
    let string = document.getElementById('input-decode').value;
    let offset = parseInt(document.getElementById('decode-offset').value);
    showMessage.innerHTML = '';
    const decodedString = cipher.decode(string, offset);
    showMessage.innerHTML += decodedString;
    // document.getElementById("decode-form").reset();
})

// RESET BUTTON
btnReset1.addEventListener('click', () => {
    alert('reset 1');
    inputEncode.innerHTML = '';
})

btnReset2.addEventListener('click', () => {
    alert('reset 2');
})

btnReset3.addEventListener('click', () => {
    alert('Reset 3');
})

// COPY BUTTON
btnCopy.addEventListener('click', () => {
    copyMessage();
    // tooltipFunction();
})