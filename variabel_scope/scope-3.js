// * global scope

let a = 1;

function coba() {
    // * local scope
    const a = 2;
    console.log(a);
}

coba();
console.log(a);
