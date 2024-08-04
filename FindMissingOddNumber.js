const input = [7,9,11,13,15,19,21]

function missingNUm(input){
    for(let i = 0; i < input.length; i++){
        if((input[i+1] - input[i] )!== 2){
            return input[i]+2;
        }
    }
}

console.log(missingNUm(input));

const res = input.filter((e,i) => {
    return((input[i+1]-input[i]) > 2)
})
.map((e) => e+2)
.filter((e,i) => i < 2)

console.log(res);