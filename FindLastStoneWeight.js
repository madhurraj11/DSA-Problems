
var lastStoneWeight = function(stones) {
    const maxPriQue = new MaxPriorityQueue();  // Assuming you have a valid MaxPriorityQueue implementation

    // Add all stones to the max priority queue
    for (let stone of stones) {
        maxPriQue.enqueue(stone, stone);  // Enqueue the stone with its value as priority
    }

    // Process the stones until we are left with one or none
    while (maxPriQue.size() > 1) {
        let max = maxPriQue.dequeue().element;     // Get the largest stone
        let smax = maxPriQue.dequeue().element;    // Get the second largest stone

        let nstone = max - smax;

        // If the stones are not the same, add the difference back
        if (nstone !== 0) {
            maxPriQue.enqueue(nstone, nstone);
        }
    }

    // Return the last remaining stone or 0 if no stones remain
    if (maxPriQue.size() === 0) {
        return 0;
    } else {
        return maxPriQue.dequeue().element;  // Return the last stone
    }
};

console.log(lastStoneWeight([2,7,4,1,8,1]));