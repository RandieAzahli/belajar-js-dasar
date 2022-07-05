// * Angkot-2

const jumlahAngkot = 10;
const AngkotBeroperasi = 6;
let noAngkot = 1;

while (noAngkot <= AngkotBeroperasi) {
    console.log('Angkot No. ' + noAngkot + ' sedang beroperasi dengan baik.');
    noAngkot++;
}

for (noAngkot = AngkotBeroperasi + 1; noAngkot <= jumlahAngkot; ++noAngkot) {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
}
