// * events handling

// // tangkap class close
// const close = document.querySelector(".close");

// // tangkap container card
// const card = document.querySelector(".card");

// // events handler
// close.addEventListener("click", function () {
// 	card.style.display = "none";
// });

// * DOM tranversal

// // tangkap tombol close
// const close = document.querySelectorAll(".close");
// // for (let i = 0; i < close.length; ++i) {
// // 	close[i].addEventListener("click", function (e) {
// // 		e.target.parentElement.style.display = "none";
// // 	});
// // }

// close.forEach(function (el) {
//     el.addEventListener("click", function (e) {
//         e.target.parentElement.style.display = "none";

//         // menghentikan aksi default sebuah element
//         e.preventDefault();

//         // stop event bubbling
//         e.stopPropagation();
//     });
// });

// // * event bubbling

// const cards = document.querySelectorAll(".card");
// cards.forEach(function (el) {
//     el.addEventListener("click", function () {
//         alert("ok");
//     });
// });

// tangkap container
const container = document.querySelector(".container");
container.addEventListener("click", function (e) {
    if (e.target.className == "close") {
        e.target.parentElement.style.display = "none";
    }
});
