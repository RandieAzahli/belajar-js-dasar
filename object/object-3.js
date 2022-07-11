// ? context this function declaration

// var a = 1;

// function Halo() {
//     console.log(this);
//     console.log("halo");
// }
// this.Halo();

// * this mengembalikan object global

// ? context this object literal

// var obj = { a: 10, nama: "Randi" };

// obj.halo = function () {
//     console.log(this);
//     console.log("helo");
// };

// obj.halo();

// * this mengembalikan object yang bersangkutan

// ? context this object constructor

// function Halo() {
//     console.log(this);
//     console.log("helo");
// }

// var obj1 = new Halo();
// var obj2 = new Halo();

// * this mengembalikan object yang baru dibuat
