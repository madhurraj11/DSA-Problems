row="";
for(let i =0; i<=5; i++){
    for(let j=0; j<= 5-i; j++){
        row += " ";
    }

    for(let k=0; k < i; k++){
        row += "*";
    }
    row += "\n";
}
console.log(row);
