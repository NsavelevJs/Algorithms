function findMax(numArray){
   let nums = numArray.slice();

    // base case
    if (nums.length == 1) { return nums[0]; }

    // check the first two numbers in the array and remove the lesser
    if (nums[0] < nums[1]) {
      nums.splice(0,1); }
    else { nums.splice(1,1); }

    // with one less number in the array, call the same function
    return findMax(nums);

}
let a = [1, 2, 5, 7, 4]


console.log(findMax(a)) // works
