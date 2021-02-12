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

function cacheFunction(fn) {
  const cacheStore = {};
  return function memoFn(num) {
    if (num in cacheStore) {
      return cacheStore[num];
    }
    cacheStore[num] = fn(num);
    return cacheStore[num];
  };
}

export { sumFibs, cacheFunction };
