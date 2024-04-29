function changeMe(arr) {
    let data;
    if (arr.length === 0) {
        console.log('""');
        return; 
    }
    console.log('panjang' + arr.length);
    let hasil = {};
    for (let i = 0; i < arr.length; i++) {
        let data = {};
        let fullName = arr[i][0] + ' ' +  arr[i][1];
        let tahunLahir = arr[i][3];
        let age = 2023 - tahunLahir;
            data.firstName = arr[i][0];
            data.lastName = arr[i][1];
            data.gender = arr[i][2];
            data.age = age < 0 || isNaN(age) ? 'Invalid Birth Year' : age;
        hasil[fullName] = data;
        // hasil[`${fullName}`] = data;
    }
    data = hasil;
    console.log(data) ;
    // return hasil;
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// Christ Evans: { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 41 } 2023 - 1982 = 41 kan yak wkwk
// Robert Downey: { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // ""