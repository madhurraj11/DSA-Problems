function bulbSwitch(n){
    let count = 0;

    let i = 1;

    while(i*i <= n){
        count++;
        i++;
    }
    return count;
}

console.log(bulbSwitch(11));