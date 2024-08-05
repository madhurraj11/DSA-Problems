const arr = [1, 2, 3, 5, 4, 6, 7, 8, 9, 11, 15];
let sum = 21;

function fourSum(arr, sum) {
  if (arr.length === 0) {
    return arr;
  }

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;


    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      let total = arr[left] + arr[i] + arr[mid] + arr[right];
      if (total === sum) {
        return [arr[left], arr[i], arr[mid], arr[right]];
      } else if (total < sum) {
        left++;
      } else {
        right--;
      }
    }
  }
  return false;
}

const res = fourSum(arr, sum);
console.log(res);