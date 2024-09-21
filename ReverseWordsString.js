/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.trim().split(/\s+/);

    let sb = "";
    for(let i = arr.length-1; i >= 0; i--){
        sb += arr[i] + " ";
    }

    return sb.trim();
};

console.log(reverseWords("the sky is blue")); // Output: blue is sky the