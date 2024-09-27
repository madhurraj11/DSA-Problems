var isValid = function(s) {
    const bracketPairs = {'(':')','{':'}','[':']'};
    const stack = [];
    
    for(let i = 0; i < s.length; i++){
        if(bracketPairs[s[i]]){
            stack.push(s[i]);
        }else{
            let ele = stack.pop();
            if(s[i] !== bracketPairs[ele]){
                return false;
            }
        }
    }
    if(stack.length===0){
        return true;
    }
    return false;
};

console.log(isValid("()[]{}")); // true