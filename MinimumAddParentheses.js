var minAddToMakeValid = function(s) {
    let count = 0;
    const stack = [];
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            stack.push(s[i]);
        }else if(stack.length>0 && stack[stack.length-1] === '('){
            stack.pop()
        }else{
            count += 1;
        }
    }

    return stack.length + count;
};

console.log(minAddToMakeValid("())"));