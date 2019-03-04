window.cipher = {
  encode: (string, offset) => {
    let codedString = '';
	for ( let i = 0; i < string.length; i++) {
    let asciiCode = string.charCodeAt(i);
    if (asciiCode >= 32 && asciiCode <= 126) {
      let asciiCodedString = (asciiCode - 32 + offset) % 95 + 32;
      codedString += String.fromCharCode(asciiCodedString);
    } else if (asciiCode >= 161 && asciiCode <= 172) {
        let asciiCodedString = (asciiCode - 161 + offset) % 12 + 161;
        codedString += String.fromCharCode(asciiCodedString);
    } else if (asciiCode >= 186 && asciiCode <= 255) {
        let asciiCodedString = (asciiCode - 186 + offset) % 70 + 186;
        codedString += String.fromCharCode(asciiCodedString);
    } else if (asciiCode == 10) {
        codedString += String.fromCharCode(10);
    } else {
        codedString += 'CharNotFound';
    }
	}
	return codedString;
  },

  decode: (string, offset) => {
    let decodedString = '';
    for ( let i = 0; i < string.length; i++) {
      let asciiCode = string.charCodeAt(i);
      if (asciiCode >= 32 && asciiCode <= 126) {
        let asciiCodedString = (asciiCode - 126 - offset) % 95 + 126;
        decodedString += String.fromCharCode(asciiCodedString);
      } else if (asciiCode >= 161 && asciiCode <= 172) {
          let asciiCodedString = (asciiCode - 172 - offset) % 12 + 172;
          decodedString += String.fromCharCode(asciiCodedString);
      } else if (asciiCode >= 186 && asciiCode <= 255) {
          let asciiCodedString = (asciiCode - 255 - offset) % 70 + 255;
          decodedString += String.fromCharCode(asciiCodedString);
      } else if (asciiCode == 10) {
          decodedString += String.fromCharCode(10);
      } else {
          decodedString += "CharNotFound";
      }
    }
    return decodedString;
    },
  };