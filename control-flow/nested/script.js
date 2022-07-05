// * loop

let a = '';

for (let i = 1; i <= 5; ++i) {
    for (let j = 1; j <= 5; ++j) {
        a += '*';
    }
    a += '\n';
}
console.log(a);
