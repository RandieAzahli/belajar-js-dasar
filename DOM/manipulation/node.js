// * manipulation node

// ? appendChild()

// buat element node baru
const pBaru = document.createElement("p");

// buat text node
const textPBaru = document.createTextNode("paragraf baru");

// simpan text node ke dalam element node yang dibuat
pBaru.appendChild(textPBaru);

// simpan node baru di akhir sectionA

const sectionA = document.getElementById("a");
sectionA.appendChild(pBaru);

// ? insertBefore()

// buat element baru
const liBaru = document.createElement("li");

// buat text node
const textLiBaru = document.createTextNode("item baru");

// simpan text node ke dalam elemen node yang dibuat
liBaru.appendChild(textLiBaru);

// simpan node baru ke dalamn node parentnya
const ul = document.querySelector("section#b ul");
const li2 = ul.querySelector("li:nth-child(2)");
ul.insertBefore(liBaru, li2);

// ? removeChild()

// tangkap parent nodenya
// tangkap elemen yang ingin dihapus
const a = sectionA.getElementsByTagName("a")[0];
sectionA.removeChild(a);

// ? replaceChild

// tangkap paren nodenya
const sectionB = document.querySelector("section#b");

// tangkap element yang ingin di ganti
const p4 = sectionB.querySelector("p");

// buat element baru
const h2 = document.createElement("h2");

// buat text node
const textH2 = document.createTextNode("judul baru");

// simpan text node ke dalam element node yang baru dibuat
h2.appendChild(textH2);

// ganti node lama menjandi node yang baru
sectionB.replaceChild(h2, p4);

pBaru.style.backgroundColor = "lightgreen";
liBaru.style.backgroundColor = "lightgreen";
h2.style.backgroundColor = "lightgreen";
