// * studi kasus bermain dengan warna

// ? membuat element tombol

// tangkap element tombol
const tombol = document.getElementById("tombol");

// buat funtion onclick
tombol.addEventListener("click", function () {
    // buat class toggle
    document.body.classList.toggle("biru-muda");
});

// ? membuat element tombol

// buat element tombol
const tAcakWarna = document.createElement("button");

// buat text node
const textTombol = document.createTextNode("Acak Warna");

// set attribute type button
tAcakWarna.setAttribute("type", "button");

// simpan text node ke dalam parent node yang baru dibuat
tAcakWarna.appendChild(textTombol);

// simpan node baru ke dalam parent node yang diinginkan
tombol.after(tAcakWarna);

// buat events acak warna
tAcakWarna.addEventListener("click", function () {
    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// ? membuat slider color

// tangkap slider element red
const sMerah = document.querySelector("input[name=sRed]");

// buat events
sMerah.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// tangkap slider element green
const sHijau = document.querySelector("input[name=sGreen]");

// buat events
sHijau.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// tangkap slider element blue
const sBiru = document.querySelector("input[name=sBlue]");

// buat events
sBiru.addEventListener("input", function () {
    const r = sMerah.value;
    const g = sHijau.value;
    const b = sBiru.value;
    document.body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
});

// ? membuat mouse events

document.body.addEventListener("mousemove", function (event) {
    // cari posisi mouse
    const posX = Math.round((event.clientX / window.innerWidth) * 255);
    const posY = Math.round((event.clientY / window.innerHeight) * 255);

    // style
    document.body.style.backgroundColor = "rgb(" + posX + "," + posY + ", 125)";
});
