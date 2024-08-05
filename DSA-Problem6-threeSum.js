const arr = [2, 3, 5, 7, 11, 15];
let sum = 25;

function threeSum(arr, sum) {
  if (arr.length === 0) {
    return arr;
  }

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;


    while (left < right) {
      let total = arr[left] + arr[i] + arr[right];
      if (total === sum) {
        return [arr[left], arr[i], arr[right]];
      } else if (total < sum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return false;
}

const res = threeSum(arr, sum);
console.log(res);