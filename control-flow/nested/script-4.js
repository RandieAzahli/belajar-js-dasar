// * loop

let a = '';

for (let i = 1; i <= 10; ++i) {
    for (let j = 1; j <= 10; ++j) {
        if (j + 1 <= i) {
            a += ' ';
        } else {
            a += '*';
        }
    }
    a += '\n';
}

console.log(a);
