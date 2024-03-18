/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
	let hasil = [];
	let huruf = 'abcdefghijklmnopqrstuvwxyz';
	for (let i = 0; i < huruf.length; i++) {
		let groupAnimals = [];
		for (let j = 0; j < animals.length; j++) {
			let firstAbjadAnimal = animals[j];
			if (huruf[i] === firstAbjadAnimal[0]) {
				groupAnimals.push(animals[j]);
			} else {
			}
		}
		if (groupAnimals.length > 0) {
			hasil.push(groupAnimals);
		} else {
		}
	}
	return hasil;
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
	groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak'])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
