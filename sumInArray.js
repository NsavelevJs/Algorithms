//declare an array to play with

// Sum in array
//example arrays
let arr = [1, 6];
let arr2 = [1, 7, 5];

//Three liner

const sIA = (arr) => {
  return arr.reduce((acc, val) => (!isNaN(val) ? acc + +val : acc), 0);
};
console.log(sIA(arr2))


const add = (a,b) => a+b
const sum = (array) => {array.reduce(add)}

console.log(sum(arr2))