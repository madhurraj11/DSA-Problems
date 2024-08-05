const arr = [2, 3, 5, 11, 15];
let sum = 16;

function twoSum(arr) {
  if (arr.length === 0) {
    return arr;
  }

  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let total = arr[left] + arr[right];
    if (total === sum) {
      return [arr[left], arr[right]];
    } else if (total < sum) {
      left++;
    } else {
      right--;
    }
  }
}

const res = twoSum(arr);
console.log(res);