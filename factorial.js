function factorial(n){
    let nextN = n-1  // example  if n = 6  6*5*4*3*2*1 = 720
    if(n===1){ // base case if its 1
    return n
}
return n * factorial(nextN) // keeps going until it hits 1
}

console.log(factorial(6)) // ========>>>>>> WORKS

