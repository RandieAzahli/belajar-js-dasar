// * parameter dan argument

function tambah(a, b) {
    // this parameter
    return a + b;
}

const a = parseInt(prompt('Masukkan nilai 1 : '));
const b = parseInt(prompt('Masukkan nilai 2 : '));
const coba = tambah(a * 2, b * 2); // this argument
console.log(coba);

function kali(a, b) {
    return a * b;
}

const hasil = kali(tambah(1, 2), tambah(3, 4));
console.log(hasil);
