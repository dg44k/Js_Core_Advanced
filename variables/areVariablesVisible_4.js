function areVariablesVisible () {
	const a = 1;
	var b = 2;
	let c = 3;
}

console.log(a, b, c); // Все переменные будут недоступны в глобальной области видимости
