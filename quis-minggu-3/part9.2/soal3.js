function cariMedian(arr) {
	arr.sort(function (a, b) {
		return a - b;
	});

	if (arr.length % 2 === 0) {
		let median1 = arr.length / 2 - 1;
		let median2 = median1 + 1;
		let hasil = arr[median1] + arr[median2];
		return hasil / 2;
	} else {
		let nilaiM = (arr.length + 1) / 2;
		return arr[nilaiM - 1];
	}
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
