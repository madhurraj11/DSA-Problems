// Write a program to check the bracket pattern is in sequence or not.
function isBalanced(input) { 
    const bracketPairs = { '[': ']', '{': '}', '(': ')' }; 
    const stack = []; 
    for (let character of input) { 
        if (bracketPairs[character]) { 
            // If character is an opening bracket, push it to the stack 
            stack.push(character); 
        } else { 
            // If character is a closing bracket 
            const lastOpen = stack.pop(); 
            if (bracketPairs[lastOpen] !== character) { 
                return "Not Balanced"; 
            } 
        } 
    } 
    // If the stack is empty, all opening brackets have been matched 
    return stack.length === 0 ? "Balanced" : "Not Balanced"; 
} 

var input1 = '[({)]}'; 
var input2 = '{[()]}'; 
console.log(isBalanced(input1)); // Output: Not Balanced 
console.log(isBalanced(input2)); // Output: Balanced
