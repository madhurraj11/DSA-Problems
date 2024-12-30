function numWaterBottles(numBottles, numExchange){
    let ans = numBottles;

    while(numBottles >= numExchange){
        let newBottles = Math.floor(numBottles / numExchange);
        let remBottles = numBottles % numExchange;
        ans += newBottles;
        numBottles = newBottles + remBottles;
    }
    return ans;
}

console.log(numWaterBottles(15,4));
