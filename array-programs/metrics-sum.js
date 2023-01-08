let n = 3;

function add(m1, m2, sum) {
    let i, j;
    for (i = 0; i < n; i++)
        for (j = 0; j < n; j++)
            sum[i][j] = m1[i][j] + m2[i][j];
}

const m1 = [[1, 2, 4],
[4, 2, 1],
[2, 5, 3]];

const m2 = [[4, 2, 1],
[5, 2, 1],
[6, 2, 4]];


let sum = new Array(n);
for (let k = 0; k < n; k++)
    sum[k] = new Array(n);

let i, j;
add(m1, m2, sum);

console.log("Sum matrix is ");
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++)
        console.log(sum[i][j]);
    console.log();
}

