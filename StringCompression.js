var compress = function(chars) {
    let index = 0;  // Index to keep track of where to modify the original array
    let count = 1;

    for (let i = 1; i <= chars.length; i++) {
        // If the current character is different from the previous one
        if (chars[i] !== chars[i - 1]) {
            // Write the character to the array
            chars[index] = chars[i - 1];
            index++;

            // If count > 1, convert it to a string and write each digit to the array
            if (count > 1) {
                const countStr = String(count);
                for (let c of countStr) {
                    chars[index] = c;
                    index++;
                }
            }

            // Reset count for the new character
            count = 1;
        } else {
            count += 1;  // Increment count if characters are the same
        }
    }

    // Return the length of the compressed array
    return index;
};

console.log(compress(["a","a","b","b","c","c","c","c","c","c","c","c","c","c","c","c"])); // "a2b2c12"