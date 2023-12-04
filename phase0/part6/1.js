// 1. Melakukan Looping Menggunakan While
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax while.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
console.log(`\n## SOAL 1 ##`);
console.log('Looping Pertama || Maju');
let i = 0;
while (i <= 10) {
	console.log(i);
	i++;
}

console.log('Looping Kedua || Mundur');
let j = 10;
while (j >= 0) {
	console.log(j);
	j--;
}

// 2. Melakukan Looping Menggunakan For
// Problem
// Pada tugas ini kamu diminta untuk melakukan looping dalam JavaScript dengan menggunakan syntax for.
// Untuk membuat tantangan ini lebih menarik, kamu juga diminta untuk membuat suatu looping yang menghitung maju dan
// menghitung mundur. Jangan lupa tampilkan di console juga judul 'LOOPING PERTAMA' dan 'LOOPING KEDUA'.
//tampilkan output yang menunjukan kalau looping itu maju pada looping pertama dan mundur pada looping kedua
console.log(`\n## SOAL 2 ##`);
console.log('Looping Pertama || Maju');
for (let i = 0; i <= 10; i++) {
	console.log(i);
}

console.log('Looping Kedua || Mundur');
for (let j = 10; j >= 0; j--) {
	console.log(j);
}

// 3. Angka Ganjil dan Genap
// Hint: kamu akan menggunakan kondisional juga di kasus ini.
// Problem
// Buatlah sebuah perulangan 1 - 100 dengan pertambahan counter sebanyak 1
// Di dalam perulangan, periksa setiap angka counter:
// Apabila angka counter adalah angka genap, tuliskan GENAP
// Apabila angka counter adalah angka ganjil, tuliskan GANJIL
console.log(`\n## SOAL 3 ##`);
for (let m = 0; m <= 100; m++) {
	if (m % 2 === 0) {
		console.log(`${m} = GENAP`);
	} else {
		console.log(`${m} = GANJIL`);
	}
}

//4. counter kelipatan
// Buatlah 3 perulangan baru dari 1 - 100, dengan pertambahan counter sebesar 2, 5, dan 9.
// Pada 3 perulangan baru ini periksa setiap angka counter:

// Apabila bukan kelipatan yang ditentukan tidak perlu menuliskan apa-apa
// Apabila angka counter adalah kelipatan 3 dengan pertambahan 2, kelipatan 6 dengan pertambahan 5, dan kelipatan 10 dengan pertambahan 9, tuliskan:
// "3 kelipatan 3"dan seterusnya.
console.log(`\n## SOAL 4 ##`);
console.log(`Counter Kelipatan 2`);
for (let n = 0; n <= 100; n += 2) {
	if (n % 3 === 0) {
		console.log(`${n} kelipatan 3`);
	}
}

console.log(`Counter Kelipatan 5`);
for (let n = 0; n <= 100; n += 5) {
	if (n % 6 === 0) {
		console.log(`${n} kelipatan 6`);
	}
}

console.log(`Counter Kelipatan 9`);
for (let n = 0; n <= 100; n += 9) {
	if (n % 10 === 0) {
		console.log(`${n} kelipatan 10`);
	}
}

console.log(`\n## SOAL 5 ##`);
// 5. Bintang asteriks
// Problem buatlah bintang seperti berikut
// let input = 5
//hasilnya
//*
//**
//***
//****
//*****

let input = 5;
let bintang = '';
for (let o = 0; o < input; o++) {
	bintang += '*';
	console.log(bintang);
}
