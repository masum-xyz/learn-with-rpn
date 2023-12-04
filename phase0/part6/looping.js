// while

// let i = 0;
// while (i < 10) {
// 	console.log(i);
// 	i++;
// }

// for

// for (let i = 5; i >= 0; i--) {
// 	console.log(i);
// }

// let nama = 'Masum';
// // ada method leng untuk menghitung jumlah karakter dengan typde data string dan array
// for (let i = 0; i < nama.length; i++) {
//     console.log(nama[i]);
// }

//  Pada tipe data array dan dan string di javascript ada yang namanya indexing di mana index itu sudah pasti berawal dari 0
// console.log(nama[0] + nama[4]);

// di berikan kasus untuk membalikan suatu kata

// let nama = 'IHSAN';
// let balikNama = '';
// for (let i = nama.length - 1; i >= 0; i--) {
// 	balikNama += nama[i];
// }
// console.log(balikNama);

// for (let i = 0; i < 5; i++) {
// 	for (let j = 5; j > 0; j--) {
// 		console.log(j);
// 	}
// 	console.log(i);
// }

// LOOPING LANJUTAN
// let i = 0;
// while (i < 10) {
// 	console.log(i);
// 	i += 2;
// }

// Menggabungkan looping dgn conditional statement
let i = 0;
while (i < 50) {
	if (i % 2 === 0) {
		console.log(`${i} = Genap`);
	} else {
		console.log(`${i} = Ganjil`);
	}
	i++;
}

// Modulus (%) adalah sisa hasil bagi
// misal 5 % 2 = 1 jadi ini bil ganji
// misal 4 % 2 = 0 jadi ini bil genap

// Problem Fizzbuzz
// Jika adalah kelipatan 3, maka tampilkan fizz
// Jika adalah kelipatan 5, maka tampilkan buzz
// Jika adalah kelipatan 3 dan 5, maka tampilkan fizzbuzz

for (let i = 0; i < 50; i++) {
	if (i % 3 === 0 && i % 5 === 0) {
		console.log(`${i} = Fizzbuzz`);
	} else if (i % 3 === 0) {
		console.log(`${i} = Fizz`);
	} else if (i % 5 === 0) {
		console.log(`${i} = Buzz`);
	} else {
		console.log(`${i}`);
	}
}

// Pada looping ada namanya break dan continue
// Break digunakan untuk menghentikan looping
// Continue membuat loop skip di iterasi tertentu

for (let i = 0; i < 50; i++) {
	if (i === 7) {
		continue;
		console.log(`${i} Saatnya Berhenti`);
	}
	console.log(i);
}
