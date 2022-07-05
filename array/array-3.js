// * manipulasi array

// ? menambah isi array

const array = [];
array[0] = "Sandhika";
array[1] = "Galih";
array[2] = "Nofa";
console.log(array);

// ? menghapus isi array

const nama = ["Sandhika", "Galih", "Nofa"];
nama[1] = undefined;

console.log(nama);

// ? menampilkan isi array

const siswa = ["Sandhika", "Galih", "Nofa"];

for (let i = 0; i < siswa.length; ++i) {
  console.log("Mahasiswa ke-" + (i + 1) + " : " + siswa[i]);
}

// ? methode pada array
// ? join

console.log(siswa.join(" - "));

// ? push

siswa.push("Doddy", "Randie");
console.log(siswa.join(" - "));

// ? pop

siswa.pop();
siswa.pop();
console.log(siswa.join(" - "));

// ? unshift

siswa.unshift("Doddy", "Randi", "rizal");
console.log(siswa.join(" - "));

// ? shift

siswa.shift();
siswa.shift();
siswa.shift();
console.log(siswa.join(" - "));

// ? splice
// splice(indexAwal, mauDihapusBerapa, elementBaru1, elementBaru2, ...)
siswa.splice(1, 2, "Doddy", "randie");
console.log(siswa.join(" - "));

// ? slice
// slice(indexAwal, indexAhkir)
const arr = ["Sandhika", "Galih", "Nofa", "Doddy", "Fitri"];
const arr2 = arr.slice(1, 4);
console.log(arr.join(" - "));
console.log(arr2.join(" - "));

// ? foreach

const angka = [1, 2, 3, 4, 5, 6, 7, 8];
const human = ["Sandhika", "Galih", "Nofa"];

angka.forEach(function (e) {
  console.log(e);
});

human.forEach(function (e, i) {
  console.log("Mahasiswa ke-" + (i + 1) + " : " + e);
});

// ? map

const number = [1, 2, 10, 5, 20, 3, 6, 8, 4];
const number2 = number.map(function (e) {
  return e * 2;
});

console.log(number2.join(" - "));

// ? sort

console.log(number2.join(" - "));
number.sort(function (a, b) {
  return a - b;
});

// ? filter & find
const number3 = number.filter(function (e) {
  return e > 5;
});
console.log(number3.join(" - "));
