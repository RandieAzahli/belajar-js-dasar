// * Mengakses array

const binantang = ['Kucing', 'kelinci', 'Monyet', 'Panda', 'Koala', 'Sapi'];
console.log(binantang[4]); // koala
console.log(binantang.length); // 6

const hari = ['Senin', 'Selasa', 'Rabu'];
const mhs = ['Sandhika', 'Galih', 'Nofa'];
const angka = [10, 123, 2004];
const mix = ['teks', 2, false];

const myFunc = function () {
    alert('Hello World !');
};

const mix2 = ['teks', 2, false, myFunc];
const mix3 = ['teks', 2, false, myFunc, [4, 5, 6]];
console.log(mix3[4][1]); // 5
