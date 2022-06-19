// * global scope

const a = 1;

function coba(a) {
    // * local scope
    console.log(a);
}

coba(a);
console.log(a);
