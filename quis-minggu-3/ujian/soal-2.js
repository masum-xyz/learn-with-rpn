/*
Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]
*/

function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  let hasil = [];
  for (let i = 0; i < arrPenumpang.length; i++) {
    let object = {};
    object.penumpang = arrPenumpang[i][0];
    object.naikDari = arrPenumpang[i][1];
    object.tujuan = arrPenumpang[i][2];
    let bayar = 0;

    for (let j = 0; j < rute.length; j++) {
      if (object.naikDari === rute[j]) {
        for (let k = 0; k < rute.length; k++) {
          if (object.tujuan === rute[k]) {
            let biaya = k - j;
            bayar = biaya * 2000;
          }
        }
      }
    }
    object.bayar = bayar;
    hasil.push(object);
  }
  return hasil;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]