var numRescueBoats = function(people, limit) {
    
    people = people.sort((a,b) => a-b);
    let start = 0;
    let end = people.length-1;
    let count = 0;
    while(start<=end){
        let mid=Math.floor((start+end)/2);

        if((people[start]+people[end]) <= limit){
            start += 1;
            end -= 1;
        }else{
            end -= 1;
        }
        count++;
    }
    return count;
};

console.log(numRescueBoats([3,5,3,4]));