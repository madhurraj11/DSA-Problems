var removeDuplicateLetters = function(s) {
    const lastIndex = new Array(26).fill(0);

    for(let i = 0; i < s.length; i++){
        let ch = s.charAt(i);
        let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);

        lastIndex[idx] = i;
    }

    const present = new Array(26).fill(false);

    const st = [];
    for(let i = 0; i < s.length; i++){
        let ch = s.charAt(i);
        let idx = ch.charCodeAt(0) - 'a'.charCodeAt(0);;

        if (present[idx]) continue;
        
        while(st.length>0 && st[st.length-1]>ch && lastIndex[st[st.length-1].charCodeAt(0)-'a'.charCodeAt(0)]>i){
            let removedChar = st.pop();
            present[removedChar.charCodeAt(0)-'a'.charCodeAt(0)] = false;
            
        }
        st.push(ch);
        present[idx]=true;
    }

    return st.join("");
};

console.log(removeDuplicateLetters("cbacdcbc")); // Output: "abc", result is the smallest in lexicographical order
