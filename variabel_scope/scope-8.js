// * global scope

const a = 1;

function coba(a) {
    // * local scope
    a = 2;
    console.log(a);
}

coba(a);
console.log(a);
