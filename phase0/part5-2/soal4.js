// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = 'wow JavaScript is so cool';

// Ambil kata dalam var word dgn substring dan hitung panjang kata
let kataPertama = word4.substring(0, 3);
let panjangKataPertama = kataPertama.length;
let kataKedua = word4.substring(4, 14);
let panjangKataKedua = kataKedua.length;
let kataKetiga = word4.substring(15, 17);
let panjangKataKetiga = kataKetiga.length;
let kataKeempat = word4.substring(18, 20);
let panjangKataKeempat = kataKeempat.length;
let kataKelima = word4.substring(21, 25);
let panjangKataKelima = kataKelima.length;

// Tampilkan output
console.log(
	`Kata Pertama: ${kataPertama}, dengan panjang: ${panjangKataPertama}`
);
console.log(`Kata Kedua: ${kataKedua}, dengan panjang: ${panjangKataKedua}`);
console.log(`Kata Ketiga: ${kataKetiga}, dengan panjang: ${panjangKataKetiga}`);
console.log(
	`Kata Keempat: ${kataKeempat}, dengan panjang: ${panjangKataKeempat}`
);
console.log(`Kata Kelima: ${kataKelima}, dengan panjang: ${panjangKataKelima}`);
