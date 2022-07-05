// * cara membuat function

function jumlahVolumeDuaKubus(a, b) {
    const kubusA = a ** 3;
    const kubusB = b ** 3;
    const jumlah = kubusA + kubusB;

    return jumlah;
}

const result = jumlahVolumeDuaKubus(8, 3);
console.log(result);
