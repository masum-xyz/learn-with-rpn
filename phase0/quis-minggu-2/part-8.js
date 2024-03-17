/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input = [
	['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'],
	['0002', 'Dika Sembiring', 'Medan', '10/10/1992', 'Bermain Gitar'],
	['0003', 'Winona', 'Ambon', '25/12/1965', 'Memasak'],
	['0004', 'Bintang Senjaya', 'Martapura', '6/4/1970', 'Berkebun'],
];

function dataHandling(arrray) {
	for (let i = 0; i < arrray.length; i++) {
		console.log(`Nomor ID: ${arrray[i][0]}`);
		console.log(`Nama Lengkap: ${arrray[i][1]}`);
		console.log(`TTL: ${arrray[i][2]} ${arrray[i][3]}`);
		console.log(`Hobi: ${arrray[i][4]}`);
		console.log(``);
	}
}
dataHandling(input);

/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/

// SOAL 2
let input2 = [
	'0001',
	'Roman Alamsyah ',
	'Bandar Lampung',
	'21/05/1989',
	'Membaca',
];

function dataHandling2(array) {
	array.splice(
		1,
		4,
		'Roman Alamsyah Elsharawy',
		'Provinsi Bandar Lampung',
		'21/05/1989',
		'Pria',
		'SMA Internasional Metro'
	);
	console.log(array);
	ttl = array[3].split('/');
	// cek bulan lahir
	if (ttl[1] === '01') {
		console.log('januari');
	} else if (ttl[1] === '02') {
		console.log('Februari');
	} else if (ttl[1] === '03') {
		console.log('Maret');
	} else if (ttl[1] === '04') {
		console.log('April');
	} else if (ttl[1] === '05') {
		console.log('Mei');
	} else if (ttl[1] === '06') {
		console.log('Juni');
	} else {
		console.log('DI ATAS BULAN JUNI :V');
	}
	let tahunLahir = [ttl[2], ttl[0], ttl[1]];
	console.log(tahunLahir);
	console.log(`${ttl[0]}-${ttl[1]}-${ttl[2]}`);
	console.log(array[1].substring(0, 14));
}

dataHandling2(input2);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
