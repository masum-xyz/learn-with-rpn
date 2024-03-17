function pasanganTerbesar(num) {
	let numStr = String(num);
	let numArr = [];
	for (let i = 0; i < numStr.length - 1; i++) {
		numArr.push(Number(numStr[i] + numStr[i + 1]));
	}
	return Math.max(...numArr);
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
