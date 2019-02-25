window.cipher = {
  encode: (string, offset) => {
    let codedString = '';
	for ( let i = 0; i < string.length; i++) {
    let asciiCode = string.charCodeAt(i);
    if (asciiCode >= 32 && asciiCode <= 127) {
      let asciiCodedString = (asciiCode - 32 + offset) % 95 + 32;
      codedString += String.fromCharCode(asciiCodedString);
    } else if (asciiCode >= 145 && asciiCode <= 156) {
        let asciiCodedString = (asciiCode - 145 + offset) % 11 + 145;
        codedString += String.fromCharCode(asciiCodedString);
    } else if (asciiCode >= 161 && asciiCode <= 255) {
        let asciiCodedString = (asciiCode - 161 + offset) % 94 + 161;
        codedString += String.fromCharCode(asciiCodedString);
  }
	}
	return codedString;
  },
  decode: (string, offset) => {
    let decodedString = '';
    for ( let i = 0; i < string.length; i++) {
      let asciiCode = string.charCodeAt(i);
      if (asciiCode >= 32 && asciiCode <= 127) {
        let asciiCodedString = (asciiCode - 127 - offset) % 95 + 127;
        decodedString += String.fromCharCode(asciiCodedString);
      } else if (asciiCode >= 145 && asciiCode <= 156) {
          let asciiCodedString = (asciiCode - 156 + offset) % 11 + 156;
          decodedString += String.fromCharCode(asciiCodedString);
      } else if (asciiCode >= 161 && asciiCode <= 255) {
          let asciiCodedString = (asciiCode - 255 - offset) % 94 + 255;
          decodedString += String.fromCharCode(asciiCodedString);
    }
    }
    return decodedString;
    },
  };
