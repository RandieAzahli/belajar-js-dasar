// * Latihan Object

function Angkot(sopir, trayek, penumpang, kas) {
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function (namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    };

    this.penumpangTurun = function (namaPenumpang, bayar) {
        if (this.penumpang.length == 0) {
            alert("angkot masih kosong ...");
            return false;
        }

        for (let i = 0; i < this.penumpang.length; ++i) {
            if (namaPenumpang == this.penumpang[i]) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    };
}

const angkot1 = new Angkot("Randi", ["Cicaheum", "Cibiru"], [], 0);
const angkot2 = new Angkot("Sandi", ["Gede Bage", "Baleendah"], [], 0);
