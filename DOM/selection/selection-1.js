// * DOM selection

// ? getElementById()

const judul = document.getElementById("judul");
judul.style.color = "red";
judul.style.backgroundColor = "skyblue";
judul.innerHTML = "Randie Azahli";

// ? getElementsByTagName

const p = document.getElementsByTagName("p");
for (let i = 0; i < p.length; ++i) {
    p[i].style.background = "lightblue";
}

const h1 = document.getElementsByTagName("h1");
h1[0].style.fontSize = "50px";

// ? getElementsByClassName

const p1 = document.getElementsByClassName("p1")[0];
p1.innerHTML = "Ini diubah dari JavaScript";
