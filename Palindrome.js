// checks if the string is the same forward and backward
const palindrome = str => {
   str = str.toLowerCase().replace(/[\W_]/g,"") // reminder: Regular Expression (aka regex) is slow for algorithms
   let size = str.length - 1 //size of the str

   for(let i=0; i < size / 2 ;i++){ // iterate through the half the string 
     if(str[i] !== str[size-i]){ // if the first letter does not match the last letter
   return false;
     }
   }
   return true
   }


console.log(palindrome("a man a plan a canal panama")) // returns true
console.log(palindrome("apple")) // returns false
console.log(palindrome("racecar"))// returns true