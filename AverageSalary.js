var average = function(salary) {
    let min = salary[0];
    let max = salary[0];
    let sum = salary[0];

    for(let i = 1; i<salary.length;i++){
        if(max<salary[i]){
            max=salary[i];
        }
        if(min>salary[i]){
            min=salary[i];
        }

        sum += salary[i]
    }

    sum = sum - min - max;

    let avg = sum/(salary.length-2);
    return avg;
};

console.log(average([4000,3000,1000,2000]));