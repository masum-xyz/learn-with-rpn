/*
Implementasikan function sorting dan getTotal untuk mendapatkan angka yang paling besar dan mengetahui berapa kali angka tersebut muncul di dalam arrNumber.

Dengan HANYA mengubah code di dalam 2 function yang diberikan (sorting dan getTotal). Dilarang mengubah isi dalam function mostFrequentLargestNumbers!
*/
function sorting(arrNumber) {
    if (arrNumber.length === 0) {
        return '';
    }
    let hasil = arrNumber.sort();
    return hasil;
}

function getTotal(arrNumber) {
    let total = 0;
    let angkaTerbesar = arrNumber[arrNumber.length - 1];
    for (let i =0; i < arrNumber.length; i++) {
        if (arrNumber[i] === angkaTerbesar) {
            total++;
        }
    }
    if (arrNumber.length === 0) {
        return (`''`);
    }
    return (`angka paling besar adalah ${angkaTerbesar} dan jumlah kemunculan sebanyak ${total} kali`);
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''