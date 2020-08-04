// regular implmentation
// F(n) = F(n-1) + F(n-2)
const fibonacci = (num) => {
  let a = 1;
  let b = 0;
  let temp;

  while (num >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }
  return b
};

//recursive implementation (i prefer this one)

const fibonacciR = (num) => {
  if (num <= 1) {
    return 1;
  }
  return fibonacciR(num - 1) + fibonacciR(num - 2);
};

//regular result
console.log(fibonacci(6));

//recursive result
console.log(fibonacciR(5));
