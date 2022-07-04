// * Penumpang angkot
const penumpang = [];

// * Tambah penumpang
const tambahPenumpang = function (namaPenumpang, penumpang) {
	// * jika angkot kosong
	if (penumpang.length == 0) {
		penumpang.push(namaPenumpang);
		return penumpang;
	} else {
		// * telusuri seluruh kursi
		for (let i = 0; i < penumpang.length; ++i) {
			if (penumpang[i] == undefined) {
				penumpang[i] = namaPenumpang;

				return penumpang;
			}
			// * jika ada nama yang sama
			else if (penumpang[i] == namaPenumpang) {
				console.log("Penumpang dengan nama " + namaPenumpang + " sudah ada di dalam angkot ...");
				return penumpang;
			}
			// * jika kursi sudah terisi semua
			else if (i == penumpang.length - 1) {
				penumpang.push(namaPenumpang);
				return penumpang;
			}
		}
	}
	return penumpang;
};

tambahPenumpang("randi", penumpang);
tambahPenumpang("sandi", penumpang);
// tambahPenumpang("zahra", penumpang);
// tambahPenumpang("rafif", penumpang);
// penumpang[1] = undefined;
// tambahPenumpang("eza", penumpang);

console.log(penumpang);

const turunPenumpang = function (namaPenumpang, penumpang) {
	if (penumpang.length == 0) {
		console.log("Angkot ini kosong...");
	} else {
		for (let i = 0; i < penumpang.length; ++i) {
			if (namaPenumpang == penumpang[i]) {
				penumpang[i] = undefined;
				console.log("Penumpang " + namaPenumpang + " telah turun ...");
				return penumpang;
			} else if (i == penumpang.length - 1 && penumpang[i] != namaPenumpang) {
				console.log("Penumpang " + namaPenumpang + " enggak ada namanya ...");
				return penumpang;
			}
		}
	}
};

turunPenumpang("sandi", penumpang);
turunPenumpang("zahra", penumpang);
tambahPenumpang("eza", penumpang);
turunPenumpang("sandi", penumpang);
tambahPenumpang("sandi", penumpang);

console.log(penumpang);
