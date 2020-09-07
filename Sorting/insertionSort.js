function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let val = arr[i];

    for (var j = i - 1; j >= 0 && arr[j] > val; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = val;
  }
}

let arr = [2, 1, 5, 3];
insertionSort(arr);
console.log(arr);


