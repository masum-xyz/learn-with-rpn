/*
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
*/
function targetTerdekat(arr) {
	let letakO = 0;
	let letakX = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 'o') {
			letakO = i + 1;
		}
		if (arr[i] === 'x') {
			letakX.push(i + 1);
		}
	}
	let jarak = [];
	if (letakX.length === 0) {
		return 0;
	} else {
		for (let j = 0; j < letakX.length; j++) {
			jarak.push(Math.abs(letakO - letakX[j]));
		}
	}
	return Math.min(...jarak);
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
