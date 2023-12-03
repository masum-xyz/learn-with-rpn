// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = 'wow JavaScript is so cool';

// Ambil kata dalam var word dgn substring
let kataPertama = word3.substring(0, 3);
let kataKedua = word3.substring(4, 14);
let kataKetiga = word3.substring(15, 17);
let kataKeempat = word3.substring(18, 20);
let kataKelima = word3.substring(21, 25);

// Tampilkan output
console.log('Kata pertama: ' + kataPertama);
console.log('Kata kedua: ' + kataKedua);
console.log('Kata ketiga: ' + kataKetiga);
console.log('Kata keempat: ' + kataKeempat);
console.log('Kata kelima: ' + kataKelima);
