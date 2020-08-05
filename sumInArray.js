//declare an array to play with
let arr = [1, 6];
let arr2 = [1, 7, 5];

// Sum in array my way
const sumAll = (arr) => {   //declare the function
  let fullArr = []; //set an empty array
  let sum = 0; //declare the sum the lowest integer

 //reducer function which take two varaibles,
//accumulator and current value which are added. 
  const reducer = (acc, currVal) => acc + currVal;
 

  arr.sort((a, b) => { //sorts the array incase it wasn't
    return a - b;
  });

  for(let i = arr[0]; i <= arr[1];i++){ //iterates everything through the arr[0] to arr[1] and pushes it to the empty array declared on line 7
      fullArr.push(i)
  }
sum = fullArr.reduce(reducer) // reduces using both the method reduce and the function created on line 12 and assigns that value to sum
  return sum //returns the sum
};

//One liner

const sIA = (arr) => {
  return arr.reduce((acc, val) => (!isNaN(val) ? acc + +val : acc), 0);
};

console.log(sumAll(arr))

console.log(sIA(arr2))
