const sumZero = (arr) => {
  arr.sort();
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
};
console.log(sumZero([-4,5,-3,4,7,-3,2,1,-4,6,76,3,3124,]));
