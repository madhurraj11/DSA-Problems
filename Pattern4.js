
let row = "";
for(let i = 65; i < 70; i++){
    for(let j = 65; j <= i ; j++){
        row += String.fromCharCode(i);
    }
    row += "\n";
}

console.log(row);