row="";
let num=1;
for(let i = 1; i <= 5; i++){
  for(let j = 1; j <= i; j++){
    row += num+" ";
         num++;
  }
     row += "\n";
 }
console.log(row);
