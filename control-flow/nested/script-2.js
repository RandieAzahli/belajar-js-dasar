// * loop

let a = '';

for (let i = 1; i <= 10; ++i) {
    for (let j = 1; j <= i; ++j) {
        a += '*';
    }
    a += '\n';
}
console.log(a);
