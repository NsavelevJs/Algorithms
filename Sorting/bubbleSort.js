// This is both an example of a bubble sort algorithm as well as the skill to translate languages
// IN JAVASCRIPT
// properties = stable, O(1) space complexity O(n^2) time complexity
function bubbleSort(arr) {
  let swapped = true;
  let j = 0;
  let temp;

  while (swapped) {
    swapped = false;
    j++;

    for (let i = 0; i < arr.length - j; i++) {
      if (arr[i] > arr[i + 1]) {
        temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  }
  return arr
}

let myArray = [12, 6, 3, 7, 13, 8, 45,1245631563,600];
bubbleSort(myArray)
console.log(bubbleSort(myArray));


// IN JAVA
// public void bubbleSort(int[] arr)
// {

//     boolean swapped = true;

//     int j = 0;

//     int tmp;

//     while (swapped)
//     {

//         swapped = false;

//         j++;

//         for (int i = 0; i < arr.length - j; i++)
//         {

//             if (arr[i] > arr[i + 1])
//             {

//                 tmp = arr[i];

//                 arr[i] = arr[i + 1];

//                 arr[i + 1] = tmp;

//                 swapped = true;

//             }

//         }

//     }

// }
