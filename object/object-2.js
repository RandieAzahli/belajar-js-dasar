// * membuat objek literal

const mhs1 = {
    nama: "Randi",
    umur: 19,
    nrp: "0046096940",
    email: "randyboled@outlook.com",
    jurusan: "Ilmu Komputer",
};

const mhs2 = {
    nama: "Sandi",
    umur: 20,
    nrp: "033030007",
    email: "sandiajja@yahoo.com",
    jurusan: "Teknik Listrik",
};

// * membuat object function declaration

function buatObjectMhs(nama, umur, nrp, email, jurusan) {
    const mhs = {};
    mhs.nama = nama;
    mhs.umur = umur;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;

    return mhs;
}

const mhs3 = buatObjectMhs("Rafif", 7, "332635273", "titanqwerty12@gmail.com", "Hukum");

// * membuat object dengan constructor

function Mahasiswa(nama, umur, nrp, email, jurusan) {
    this.nama = nama;
    this.umur = umur;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

const mhs4 = new Mahasiswa("Zahra", 8, "32423423897", "zahraajja@gmail.com", "Analis Kimia");
