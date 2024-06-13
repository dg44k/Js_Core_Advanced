const getCountNumber = number => {
	if (typeof number !== 'number') return 0;

	return String(number).length
};

console.log(getCountNumber(123)); // 3
console.log(getCountNumber('ssa')); // 0
console.log(getCountNumber(123323)); // 6
console.log(getCountNumber()); // 0