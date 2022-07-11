// ? game suit jawa v2.0

// * function untuk pilihan komputer

function getPilihanKomputer() {
    let computer = Math.random();

    if (computer < 0.34) return "gajah";
    if (computer >= 0.34 && computer <= 0.67) return "orang";
    return "semut";
}

// * function untuk rules

function getHasil(computer, player) {
    if (player == computer) return "SERI !";
    if (player == "gajah") return computer == "orang" ? "MENANG !" : "KALAH !";
    if (player == "semut") return computer == "gajah" ? "MENANG !" : "KALAH !";
    if (player == "orang") return computer == "semut" ? "MENANG !" : "KALAH !";
}

// * function putar

function putar() {
    const imgPutar = document.querySelector(".img-komputer");
    const gambar = ["gajah", "orang", "semut"];
    let i = 0;
    const timeStart = new Date().getTime();
    setInterval(function () {
        if (new Date().getTime() - timeStart > 1000) {
            clearInterval;
            return false;
        }
        imgPutar.setAttribute("src", "img/" + gambar[i++] + ".png");
        if (i == gambar.length) {
            i = 0;
        }
    }, 100);
}

// * selection gambar

const pilihanGambar = document.querySelectorAll("li img");
pilihanGambar.forEach(function (e) {
    e.addEventListener("click", function () {
        const pilihanKomputer = getPilihanKomputer();
        const pilihanPlayer = e.className;
        const hasil = getHasil(pilihanKomputer, pilihanPlayer);

        putar();

        setTimeout(function () {
            // * selection img-komputer
            const imgComputer = document.querySelector(".img-komputer");
            imgComputer.setAttribute("src", "img/" + pilihanKomputer + ".png");

            // * selection info
            const info = document.querySelector(".info");
            info.innerHTML = hasil;
        }, 1000);
    });
});

// // * selection gajah
// const pGajah = document.querySelector(".gajah");

// // * buat events
// pGajah.addEventListener("click", function () {
//     // * buat variabel hasil
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pGajah.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     // * selection img-komputer
//     const imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute("src", "img/" + pilihanKomputer + ".png");

//     // * selection info
//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });

// // * selection orang
// const pOrang = document.querySelector(".orang");

// // * buat events
// pOrang.addEventListener("click", function () {
//     // * buat variabel hasil
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pOrang.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     // * selection img-komputer
//     const imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute("src", "img/" + pilihanKomputer + ".png");

//     // * selection info
//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });

// // * selection semut
// const pSemut = document.querySelector(".semut");

// // * buat events
// pSemut.addEventListener("click", function () {
//     // * buat variabel hasil
//     const pilihanKomputer = getPilihanKomputer();
//     const pilihanPlayer = pSemut.className;
//     const hasil = getHasil(pilihanKomputer, pilihanPlayer);

//     // * selection img-komputer
//     const imgComputer = document.querySelector(".img-komputer");
//     imgComputer.setAttribute("src", "img/" + pilihanKomputer + ".png");

//     // * selection info
//     const info = document.querySelector(".info");
//     info.innerHTML = hasil;
// });
