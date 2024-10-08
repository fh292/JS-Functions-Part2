// receives a number n
// returns true if it's odd, false otherwise
function isOdd(n) {
  if (n % 2 !== 0) return true;
  else return false;
}

console.log(isOdd(4));

// receives a number n
// returns the number of ODD numbers smaller than n
function oddsSmallerThan(n) {
  console.log(Math.floor((n - 1) / 2));
}

oddsSmallerThan(15);

// receives a number n
// returns its square if it's odd
// returns its double if it's even
function squareOrDouble(n) {
  if (n % 2 !== 0) {
    console.log(n * n);
  } else {
    console.log(n * 2);
  }
}
squareOrDouble(6);
