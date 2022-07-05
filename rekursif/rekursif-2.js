// * rekursif

let result = 1;

for (let i = 5; i > 0; --i) {
    result *= i;
}

console.log(result);

console.log('\n');

function faktorial(n) {
    if (n === 0) return 1;
    return n * faktorial(n - 1);
}

console.log(faktorial(5));
