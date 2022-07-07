// * mendengarkan atau menerapkan suatu events di dalam DOM

// ? Events Handler

// ? inline HTML attribute

// tangkap element yang dipilih
const p3 = document.querySelector(".p3");

// function ketika diklisk
function ubahWarnaP3() {
    p3.style.backgroundColor = "lightblue";
}

// ? element methode

// tangkap element yang dipilih
const p2 = document.querySelector(".p2");

// funtion ketika diklik
function ubahWarnaP2() {
    p2.style.backgroundColor = "lightblue";
}

// pilih methode yang diinginkan
p2.onclick = ubahWarnaP2;

// ? addEventsListener()

// tangkap element events
const p4 = document.querySelector("section#b p");
p4.addEventListener("click", function () {
    // tangkap parent node nya
    const ul = document.querySelector("section#b ul");

    // buat element baru
    const liBaru = document.createElement("li");

    // buat text node baru
    const textBaru = document.createTextNode("item baru");

    // simpan text node ke dalam element baru
    liBaru.appendChild(textBaru);

    // simpan node baru kedalam parent nodenya
    ul.appendChild(liBaru);
});
