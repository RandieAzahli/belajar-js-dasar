// * if

const angka = prompt('Masukkan Angka : ');

if (angka % 2 === 0) {
    console.log('angka ' + 'adalah angka genap');
} else if (angka % 2 === 1) {
    console.log('angka ' + 'adalah angka ganjil');
} else {
    console.log('Yang anda masukkan bukan berupa angka');
}
