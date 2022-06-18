// * Suit Game

let tanya = true;

while (tanya) {
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
    if (player == computer) {
        result = 'SERI !';
    } else if (player == 'gajah') {
        if (computer == 'orang') {
            result = 'MENANG !';
        } else {
            result = 'KALAH !';
        }
    } else if (player == 'semut') {
        result = computer == 'gajah' ? 'MENANG !' : 'KALAH !';
    } else if (player == 'orang') {
        result = computer == 'semut' ? 'MENANG !' : 'KALAH !';
    } else {
        result = 'Anda memasukkan pilihan yang salah !';
    }

    // ? tampilkan hasilnya
    console.log('Computer : ' + computer);
    console.log('Player : ' + player);
    console.log('Hasil : ' + result);
    console.log('\n');

    tanya = confirm('Coba lagi ?');
}

alert('Terima kasih sudah bermain ...');
