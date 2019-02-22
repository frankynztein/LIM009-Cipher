window.cipher = {
  encode: (string, offset) => {
    let codedString = '';
	for ( let i = 0; i < string.length; i++) {
    let asciiCode = string.charCodeAt(i);
    console.log(asciiCode);
		let asciiCodedString = (asciiCode - 32 + offset) % 223 + 32;
		codedString += String.fromCharCode(asciiCodedString);
	}
	return codedString;
  },
  decode: (string, offset) => {
    let decodedString = '';
    for ( let i = 0; i < string.length; i++) {
      let asciiCode = string.charCodeAt(i);
      console.log(asciiCode);
      let asciiCodedString = (asciiCode - 32 - offset) % 223 + 32;
      decodedString += String.fromCharCode(asciiCodedString);
    }
    return decodedString;
    },
  };
