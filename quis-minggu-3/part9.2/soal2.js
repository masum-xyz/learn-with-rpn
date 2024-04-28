//cari faktor persekutuan terbesar
function fpb(angka1, angka2) {
	let faktor1 = [];
	let faktor2 = [];
	let faktorPersekutuan = [];

	for (let i = 1; i <= angka1; i++) {
		if (angka1 % i === 0) {
			faktor1.push(i);
		}
	}
	for (let i = 1; i <= angka2; i++) {
		if (angka2 % i === 0) {
			faktor2.push(i);
		}
	}

	for (let i = 0; i < faktor1.length; i++) {
		for (let j = 0; j < faktor2.length; j++) {
			if (faktor1[i] === faktor2[j]) {
				faktorPersekutuan.push(faktor1[i]);
			}
		}
	}

	return faktorPersekutuan[faktorPersekutuan.length - 1];
}

// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
