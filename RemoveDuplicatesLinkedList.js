var deleteDuplicates = function(head) {
    if(head === null || head.next === null){
        return head;
    }

    let dummy = new ListNode(head.val);
    let ans = dummy;
    let ptr = head.next;
    while(ptr!==null){
        if(ptr.val!==dummy.val){
            let temp = new ListNode(ptr.val);
            dummy.next = temp;
            dummy = dummy.next;
        }
        ptr = ptr.next;
    }
    return ans;

};

console.log(deleteDuplicates([1,1,2,3,3,4]));