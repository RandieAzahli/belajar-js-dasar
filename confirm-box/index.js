// * Confirm Box

let again = true;

while (again === true) {
    const nama = prompt('Masukkan nama : ');
    alert('Nama kamu adalah ' + nama);

    again = confirm('Coba Lagi ? ');
}

alert('Terimakasih !');
