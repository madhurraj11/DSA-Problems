var isPalindrome = function(s) {
    let str= "";

    for(let i = 0; i < s.length; i++){
        if(s[i].match(/[a-zA-Z0-9]/g)){
            str += s[i].toLowerCase();
        }
    }
    let start = 0;
    let end = str.length-1;

    while(start<=end){
        if(str[start]===str[end]){
            start++;
            end--;
        }else{
            return false;
        }
    }
    return true;
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));