// * Suit Game

// ? menangkap pilihan player
const player = prompt('Pilih : gajah, semut, orang ?');

// ? menangkap bilangan computer
// ? menangkap bilangan random
let computer = Math.random();

if (computer < 0.34) {
    computer = 'gajah';
} else if (computer >= 0.34 && computer <= 0.67) {
    computer = 'orang';
} else {
    computer = 'semut';
}

// ? menentukan rules
let result = '';
if (computer == player) {
    result = 'SERI !';
} else if (computer == 'gajah') {
    if (player == 'orang') {
        result = 'KALAH !';
    } else {
        result = 'MENANG !';
    }
} else if (computer == 'semut') {
    result = player == 'gajah' ? 'KALAH !' : 'MENANG !';
} else if (computer == 'orang') {
    result = player == 'semut' ? 'KALAH !' : 'MENANG !';
}

// ? tampilkan hasilnya
console.log('Computer : ' + computer);
console.log('Player : ' + player);
console.log('Hasil : ' + result);
