function sumSmallPositiveNumber (arrayNumbers) {
	return arrayNumbers
				.filter(number => number > 0 && number < 10)
				.reduce((acc, curr) => acc + curr)
}