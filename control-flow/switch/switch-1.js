// * switch

const hari = parseInt(prompt('Masukkan No. hari : '));

switch (hari) {
    case 1:
        alert('Hari Senin');
        break;
    case 2:
        alert('Hari Selasa');
        break;
    case 3:
        alert('Hari Rabu');
        break;
    case 4:
        alert('Hari kamis');
        break;
    case 5:
        alert("Hari Jum'at");
        break;
    case 6:
        alert('Hari Sabtu');
        break;
    case 7:
        alert('Hari Minggu');
        break;

    default:
        alert('Nama hari cuman ada 7 !');
}
