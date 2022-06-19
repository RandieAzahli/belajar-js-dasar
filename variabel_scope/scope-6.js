// * global scope

const a = 1;

function coba(a) {
    // * local scope
    console.log(a);
}

coba(2);
console.log(a);
