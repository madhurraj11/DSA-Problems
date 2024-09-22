var makeEqual = function(words) {
    const fre = new Array(26).fill(0);

    for(let i = 0; i < words.length; i++){
        let w = words[i];
        for(let j = 0; j < w.length; j++){
            let ch = w.charAt(j);
            let idx = ch.charCodeAt(0)-'a'.charCodeAt(0);
            fre[idx] = fre[idx] + 1;
        }
    }

    for(let i = 0; i < 26; i++){
        if(fre[i] % words.length !== 0){
            return false;
        }
    }
    return true;
}    

console.log(makeEqual(["abc","acbca","b"])); // Output: true