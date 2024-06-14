class EmptyArrayError extends Error {
	constructor (message) {
		super(message)
		this.name = "EmptyArrayError"
	}
}

function isEmptyArray (array) {
	if (array.length === 0) {
		throw new EmptyArrayError("Your array is empty!")
	}

	return array;
}

try {
	isEmptyArray([123])
	console.log('Excellent');

	isEmptyArray([])
} 
catch (error) {
	console.log(error.message, error.name);
}