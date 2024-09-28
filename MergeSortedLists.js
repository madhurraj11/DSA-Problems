var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(-1);
    let ans = dummy;
    let ptr1 = list1;
    let ptr2 = list2;

    while(ptr1!==null && ptr2!==null){
        if(ptr1.val < ptr2.val){
            dummy.next = ptr1;
            ptr1 = ptr1.next;
        }else{
            dummy.next = ptr2;
            ptr2 = ptr2.next;
        }
        dummy = dummy.next;
    }
    if(ptr1===null){
        dummy.next = ptr2;
    }else{
        dummy.next = ptr1;
    }

    return ans.next;
};

console.log(mergeTwoLists([1,2,4], [1,3,4]));