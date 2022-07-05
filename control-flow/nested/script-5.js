//  * loop

let a = '';

for (let i = 1; i <= 10; ++i) {
    for (let j = 1; j <= i; ++j) {
        a += '*';
    }
    a += '\n';
}

for (let k = 10; k >= 1; --k) {
    for (let l = 1; l <= k; ++l) {
        a += '*';
    }
    a += '\n';
}

console.log(a);
