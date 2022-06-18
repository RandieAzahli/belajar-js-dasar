// * Angkot-3

const jumlahAngkot = 10;
let noAngkot = 1;
const angkotBeroperasi = 6;

for (let i = noAngkot; i <= jumlahAngkot; ++i) {
    if (i <= angkotBeroperasi) {
        console.log('Angkot No. ' + i + ' beroperasi dengan baik.');
    } else {
        console.log('Angkot No. ' + i + ' sedang tidak beroperasi.');
    }
}
