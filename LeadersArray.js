const arr = [16, 17, 4, 3, 5, 2];
const leadersArr = [arr[arr.length - 1]];
let max = arr[arr.length - 1];
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] > max) {
    max = arr[i];
    leadersArr.push(arr[i]);
    continue;
  }
}

console.log(leadersArr, max);
