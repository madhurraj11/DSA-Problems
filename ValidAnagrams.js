var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    const freq = new Array(26).fill(0);

    for(let i = 0; i < s.length; i++){
        freq[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        freq[t[i].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    for(let i = 0; i < 26; i++){
        if(freq[i]!==0){
            return false;
        }
    }
    return true;
};
let s = "anagram", t = "nagaram"
console.log(isAnagram(s,t));