
for(let i = 0; i <= 7; i++) {
    let row = "";
    for(let j=0; j <= 10; j++) {
        if(i <= 1){
            if((j>=2-i && j<=3+i) || (j>=7-i && j<=8+i)){
                row += "*";
            }
            else{
                row += " ";
            }
        }
        else{
            if(j>=i-2 && j<=12-i){
                row += "*";
            }
            else{
                row += " ";
            }
        }
    }
    console.log(row);
}