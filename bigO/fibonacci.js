function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function memoizedfib(n, memo = { 0: 0, 1: 1 }) {
  if (n in memo) return memo[n];
  return (memo[n] = memoizedfib(n - 1, memo) + memoizedfib(n - 2, memo));
}
