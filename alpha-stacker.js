var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var alfa = [];
function stackLetters (theAlphabetArray) {
	for ( var i = 0; i < alphabet.length; i++) {
		alfa.push(alphabet[i]);
		console.log(alfa.join(""));
	}
}
function stackLetters (theAlphabetArray) {
	for ( var i = 0; i < alphabet.length; i++) {
		alfa.push(alphabet[i]);
		console.log(alfa.join(""));
		if (i % 3 === 2) {
			alfa.push(" ");
		}
	}
}
stackLetters(alphabet);