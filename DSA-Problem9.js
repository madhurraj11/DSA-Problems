arr = [9, 18, 27, 36, 45, 54, 63, 72, 81, 90, 99, 108, 117, 126, 135, 144, 153, 162, 171, 180, 189, 198, 207, 216, 225, 234, 243, 252, 261, 270, 279, 288, 297, 306, 315, 324, 333, 342, 351, 360, 369, 378, 387, 396, 405, 414, 423, 432, 441, 450, 459, 468, 477, 486, 495, 504, 513, 522, 531, 540, 549, 558, 567, 576, 585, 594, 603, 612, 621, 630, 639, 648, 657, 666, 675, 684, 693, 702, 711, 720, 729, 738, 747, 756, 765, 774, 783, 792, 801, 810, 819, 828, 837, 846, 855, 864, 873, 882, 891];

function findSub(arr) {
  const resArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].toString().length === 2) {
      let firstDigit = arr[i].toString()[0];
      let secondDigit = arr[i].toString()[1];
      let sub = parseInt(firstDigit) - parseInt(secondDigit);
      if (sub < 0) {
        sub = -sub;
      }
      if (sub === 3) {
        resArr.push(arr[i]);;
      }
    }
    else if (arr[i].toString().length === 3) {
      let firstDigit = arr[i].toString()[0];
      let thirdDigit = arr[i].toString()[2];
      let sub = parseInt(firstDigit) - parseInt(thirdDigit);
      if (sub < 0) {
        sub = -sub;
      }
      if (sub === 3) {
        resArr.push(arr[i]);
      }
    }
  }
  return resArr;
}

console.log(findSub(arr));