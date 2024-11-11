var lengthOfLastWord = function(s) {

    let count = 0;
    for(let i = s.length-1; i>=0; i--){

        let ch = s.charAt(i);
        if(ch !== " "){
            count += 1;
        }else if(count!==0){
            break;
        }
    }
    return count;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
