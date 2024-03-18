//tentukan apakah ini deret aritmatika atau bukan
// let selisih = 0;

function tentukanDeretAritmatika(arr) {
	let benar = [];
	let salah = [];
	let selisih = arr[1] - arr[0];
	for (let i = 0; i < arr.length - 1; i++) {
		if (selisih === arr[i + 1] - arr[i]) {
			benar.push(true);
		} else if (selisih != arr[i + 1] - arr[i]) {
			salah.push(false);
		}
	}

	if (benar.length === arr.length - 1) {
		return true;
	} else {
		return false;
	}
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
