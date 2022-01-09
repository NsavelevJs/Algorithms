function factorial(n){
    let nextN = n-1  // example  if n = 6  6*5*4*3*2*1 = 720
   return n === 1 ? n : n * factorial(nextN) // base case if its 1
     // returns n at value of 1

 // keeps going until it hits 1
}

console.log(factorial(8)) // ========>>>>>> WORKS

