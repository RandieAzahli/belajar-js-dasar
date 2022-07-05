// * Angkot-4

const jumlahAngkot = 10;
let noAngkot = 1;
const angkotBeroperasi = 6;

for (let i = noAngkot; i <= jumlahAngkot; ++i) {
    if (i <= angkotBeroperasi && i !== 5) {
        console.log('Angkot No. ' + i + ' beroperasi dengan baik.');
    } else if (i == 8 || i == 10 || i == 5) {
        console.log('Angkot No. ' + i + ' sedang lembur');
    } else {
        console.log('Angkot No. ' + i + ' sedang tidak beroperasi.');
    }
}
