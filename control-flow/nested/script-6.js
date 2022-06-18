//  * loop

let a = '';

for (let i = 1; i <= 10; ++i) {
    for (let j = 10; j >= i; --j) {
        a += ' ';
    }
    for (let k = 1; k <= i; ++k) {
        a += '*';
    }

    for (let l = 1; l <= i - 1; ++l) {
        a += '*';
    }

    a += '\n';
}

console.log(a);
