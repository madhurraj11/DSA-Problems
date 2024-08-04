function generatePattern(n) { 
    const size = 2 * n - 1; 
    const matrix = Array.from({ length: size }, () => Array(size).fill(0)); 
    for (let layer = 0; layer < n; layer++) { 
        let value = n - layer; 
        for (let i = layer; i < size - layer; i++) { 
            for (let j = layer; j < size - layer; j++) { 
                matrix[i][j] = value; 
            } 
        } 
    } 
    return matrix.map(row => row.join('')).join('\n'); 
} 
// Example usage: 
const n = 3; 
console.log(generatePattern(n));

// This function generates a pattern of numbers in a spiral form. It starts from the center.
