// * rekursif

for (let i = 10; i > 0; --i) {
    console.log(i);
}

console.log('\n');

function mundurAngka(n) {
    if (n === 0) return;
    console.log(n);

    return mundurAngka(n - 1);
}

mundurAngka(10);
