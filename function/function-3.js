// * parameter dan argument

function tambah() {
    let hasil = 0;

    for (let i = 0; i < arguments.length; ++i) {
        hasil += arguments[i];
    }

    return hasil;
}

const coba = tambah(1, 2, 2, 10, 30);
console.log(coba);
