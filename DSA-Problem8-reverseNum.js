let num = 12345;

function reverseNum(num) {
  let result = 0;
  while (num > 0) {
    let temp = num % 10;
    result = result * 10 + temp;
    num = Math.floor(num / 10);
  }
  return result;
}

const res = reverseNum(num);
console.log(res);