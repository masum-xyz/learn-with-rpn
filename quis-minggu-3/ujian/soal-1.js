/*
Implementasikan function deepSum untuk mendapatkan jumlah pertambahan dari angka-angka yang terdapat di dalam array
*/

function deepSum (arr) {
  if (arr.length <= 0) {
    return 'No number';
  }
  let sum1 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum2 = 0;
    for (let j = 0; j < arr[i].length; j++) {
      let sum3 = 0;
      for (let k = 0; k < arr[i][j].length; k++) {
        sum3 += arr[i][j][k];
      }
      sum2 += sum3;
    }
    sum1 += sum2;
  }
  return sum1;
}

//TEST CASE
console.log(deepSum([
  [
    [4, 5, 6],
    [9, 1, 2, 10],
    [9, 4, 3]
  ],
  [
    [4, 14, 31],
    [9, 10, 18, 12, 20],
    [1, 4, 90]
  ],
  [
    [2, 5, 10],
    [3, 4, 5],
    [2, 4, 5, 10]
  ]
])); // 316

console.log(deepSum([
  [
    [20, 10],
    [15],
    [1, 1]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    [2],
    [9, 11]
  ],
  [
    [3, 5, 1],
    [1, 5, 3],
    [1]
  ],
  [
    [2]
  ]
])); // 156

console.log(deepSum([])); // No number