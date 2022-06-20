// * manipulasi array

// ? menambah isi array

const array = [];
array[0] = 'Sandhika';
array[1] = 'Galih';
array[2] = 'Nofa';

console.log(array);

// ? menghapus isi array

const nama = ['Sandhika', 'Galih', 'Nofa'];
nama[1] = undefined;

console.log(nama);

// ? menampilkan isi array

const siswa = ['Sandhika', 'Galih', 'Nofa'];

for (let i = 0; i < siswa.length; ++i) {
    console.log('Mahasiswa ke-' + (i + 1) + ' : ' + siswa[i]);
}

// ? methode pada array
// ? join

console.log(siswa.join(' - '));

// ? push

siswa.push('Doddy', 'Randie');
console.log(siswa.join(' - '));

// ? pop

siswa.pop();
siswa.pop();
console.log(siswa.join(' - '));

// ? unshift

siswa.unshift('Doddy', 'Randi', 'rizal');
console.log(siswa.join(' - '));

// ? shift

siswa.shift();
siswa.shift();
console.log(siswa.join(' - '));
