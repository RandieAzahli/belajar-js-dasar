// * switch-2

const item = prompt('Masukkan nama makanan : \nList (nasi, susu, ayam, soda, hamburger, gorengan).');

switch (item) {
    case 'nasi':
    case 'susu':
    case 'ayam':
        alert('Ini adalah makanan / minuman sehat.');
        break;
    case 'soda':
    case 'hamburger':
    case 'gorengan':
        alert('Ini adalah makanan / minuman tidak sehat.');
        break;

    default:
        alert('makanan / minuman tidak ada di list.');
}
