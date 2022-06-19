// * global scope

let a = 1;

function coba() {
    // * local scope
    const b = 2;
    console.log(a);
    console.log(b);
}

coba();
console.log(b);
