function generateRandomString (countLetter) {
	let randomString = '';

	for (let index = 0; index < countLetter; index++) {
		randomString += String.fromCharCode(generateRandomASCIICode())
	}
	
	return randomString;
}

const generateRandomASCIICode = () => {
	return Math.floor(Math.random()*94 + 32) // в таблице ASCII от 32 до 126 лежат цифры, некоторые символы и англиские буквы
}