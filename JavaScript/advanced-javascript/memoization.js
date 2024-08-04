// Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

const memoizedFibonacci = (function () {
    const cache = {};
  
    return function fib(n) {
      if (n in cache) return cache[n];
      if (n <= 1) return n;
  
      cache[n] = fib(n - 1) + fib(n - 2);
      return cache[n];
    };
  })();