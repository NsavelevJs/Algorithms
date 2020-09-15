function binarySearch(arr, x) {
  // 'X' marks the spot!!!

  let left = 0; //the first page of the phone book
  let right = arr.length - 1; //the other end of the phone book
  while (left <= right) {
    // as long as the left side is less than the right side do as follows
    let mid = left + Math.floor((right - left) / 2); //declare the middle of the array
    if (arr[mid] === x) {
      // if the midway point is the X
      return mid; // return the mid way point
    }
    if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log("Not in this array's house!");
}
let myArray = [17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

console.log(binarySearch(myArray, 7));
