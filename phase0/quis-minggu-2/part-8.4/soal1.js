/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
	let newKata = '';
	for (let i = kata.length - 1; i >= 0; i--) {
		newKata += kata[i];
	}

	function cekPalindrom() {
		if (newKata === kata) {
			return 'true';
		} else {
			return 'false';
		}
	}
	return cekPalindrom();
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
