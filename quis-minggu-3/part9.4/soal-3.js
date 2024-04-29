//TIPS: gunakan method toUpperCase() dan toLowerCase()
function tukarBesarKecil(kalimat) {
  let kata = kalimat.split('');
    for (let j = 0; j < kata.length; j++) {
      if (kata[j] === kata[j].toUpperCase()) {
        kata[j] = kata[j].toLowerCase();
      } else {
        kata[j] = kata[j].toUpperCase();
      }
    }
  return kata.join('');
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"