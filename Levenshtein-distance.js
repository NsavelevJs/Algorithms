// O(N*M) time complexity

// definition: The Levenshtien Distance between two words is the minimum number of single character edits (insertion )

const levDist = (str0, str1) => {
  // first start off with building a matrix
  // A matrix is a column and row structure
  const grid = []; // grid
  // iterate through both of the strings
  for (let i = 0; i < str0.length + 1; i++) {
    const row = []; // row
    for (let j = 0; j < str1.length + 1; j++) {
      row.push(j);
    }
    row[0] = i;
    grid.push(row);
  }
  // Amazing now lets enter the matrix....

  for (let i = 1; i < str0.length + 1; i++) { // iterate through the length of the first string
    for (let j = 1; j < str1.length + 1; j++) { // iterate through the second string 
      if (str0[i - 1] === str1[j - 1]) { // if the value of the first letter is the same 
        grid[i][j] = grid[i - 1][j - 1]; // give it the diagonal value of the matrix
      } else {
        grid[i][j] = //other wise give it the incremented minimum value of the diagnol value, row value or column value
          1 + Math.min(grid[i - 1][j - 1], grid[i - 1][j], grid[i][j - 1]);
      }
    }
  }
  console.log(grid); // logs the grid
  return grid[str0.length][str1.length]; // returns the value of each string length
};

let string1 = "George";
let string2 = "Goerge";

console.log(levDist(string1, string2));
