function primeNumbers(n) {
  const primeList = [];
  for (let num = 2; num <= n; num++) {
    isPrime = true;
    for (let i = 2; i < num / 2 + 1; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeList.push(num);
    }
  }

  return primeList;
}

console.log(primeNumbers(23));
