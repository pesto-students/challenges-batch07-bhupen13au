const cacheStore = {};

function fibo(n) {
  if (n <= 1) return 1;
  return fibo(n - 1) + fibo(n - 2);
}

function sumFibs(num) {
  let sum = 0;
  let i = 0;
  let fib = fibo(i);

  if (typeof num !== 'number') {
    return TypeError;
  }

  while (fib < num) {
    if (fib % 2 !== 0) {
      sum += fib;
    }
    i += 1;
    fib = fibo(i);
  }
  return sum;
}

function cacheFunction(num) {
  let val = cacheStore[num];
  if (val) {
    return val;
  }
  val = sumFibs(num);
  cacheStore[num] = val;
  return sumFibs;
}

export { sumFibs, cacheFunction };
