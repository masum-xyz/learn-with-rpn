// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
/*
Cek nama ada atau tidak, jika tdk keluarkan output sperti di atas
cek peran ada atau tidak, jika tdk kluarkan output sperti di atas
definisakan dengan if 3 peran yg tersedia, jika peran yg di pilih ada maka mengeluarkan output seperti di atas
jika peran yg di pilih tidak ada maka mengeluarkan output "tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada"
*/

// Ubah input sesuai kesukaanmu di sini hehe
let nama = 'Masum';
let peran = 'ksatriaaa';

//code disini gunakan console.log untuk outputnya
console.log('Game Proxytia | @masum-xyz');
if (nama == '') {
	console.log('Nama wajib diisi!');
} else if (peran == '') {
	console.log(`Halo ${nama} , Pilih peranmu untuk memulai game!`);
} else if (peran == 'Ksatria' || peran == 'ksatria') {
	console.log(`Halo Ksatria ${nama} , Kamu dapat menyerang dengan senjatamu!`);
} else if (peran == 'Tabib' || peran == 'tabib') {
	console.log(`Halo Tabib ${nama} , Kamu akan membantu temanmu yang terluka!`);
} else if (peran == 'Penyihir' || peran == 'penyihir') {
	console.log(
		`Halo Penyihir ${nama} , Ciptakan keajaiban yang membantu kemenanganmu!`
	);
} else {
	console.log(
		`Halo ${nama} tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada`
	);
}
