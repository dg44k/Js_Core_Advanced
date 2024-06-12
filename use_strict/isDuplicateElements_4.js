'use strict'

function isDuplicateElements(elements){
	const duplicates = elements.filter((elem, index, arr) => arr.indexOf(elem) !== index);

	return !!duplicates.length;
}

console.log(isDuplicateElements([1, 2, 2, 3]))
console.log(isDuplicateElements([1, 2, 3]))