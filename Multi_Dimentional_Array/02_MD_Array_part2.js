let grid = [
    [10, 20, 30],
    [4, 5, 6],
    [7, 8, 9]
];

// Access — [row][col]
console.log(grid[0][1]);//20
console.log(grid[2][1]);//8

grid[0][0] = 99;//Modifying matric value
console.log(grid[0][0]);

console.log(grid.length);   // 3 — number of rows
console.log(grid[0].length);  // 3 — number of cols in row 0

let testMatrix = [
    ["login", "pass", 200],
    ["checkout", "fail", 404],
    ["search", "pass", 180]
];

for (let i = 0; i < testMatrix.length; i++) {

    for (let j = 0; j < testMatrix[i].length; j++) {
        console.log(testMatrix[i][j] + " ")
    }
    console.log(" ");
}