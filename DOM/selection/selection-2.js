// * DOM selection

// ? querySelector

// const p = document.querySelector("#b p");
// p.style.color = "green";
// p.style.fontSize = "30px";

// const li = document.querySelector("#b ul li:nth-child(2)");
// li.style.backgroundColor = "orange";

// ? querySelectorAll

// const pAll = document.querySelectorAll("p");
// for (let i = 0; i < pAll.length; ++i) {
//     pAll[i].style.backgroundColor = "lightblue";
// }

// ? change root document

// const p4 = document.querySelectorAll("p")[3];
// p4.style.backgroundColor = "lightblue";

const sectionB = document.querySelector("section#b");
const p4 = sectionB.getElementsByTagName("p")[0];
p4.style.backgroundColor = "orange";
