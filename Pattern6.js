row="";
for(let i =0; i<=5; i++){
    for(let j=0; j< i; j++){
        row += " ";
    }

    for(let k=0; k < 5-i; k++){
        row += "*";
    }
    row += "\n";
}
console.log(row);
