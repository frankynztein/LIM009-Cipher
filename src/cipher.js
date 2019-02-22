window.cipher = {
  encode: (string, offset) => {
    let codedString = '';
	for ( let i = 0; i < string.length; i++) {
		let asciiCode = string.charCodeAt(i);
		let asciiCodedString = (asciiCode - 65 + offset) % 26 + 65;
		codedString += String.fromCharCode(asciiCodedString);
	}
	return codedString;
  },
  decode: () => {
    /* Acá va tu código */
  }
};
