var isPalindrome = function(head) {
    const st = [];
    let ptr = head;

    while(ptr!== null){
        st.push(ptr.val);
        ptr=ptr.next;
    }

    let ptr2 = head;

    while(ptr2!==null){
        let val1 = ptr2.val;
        let val2 = st.pop();

        if(val1 !== val2){
            return false;
        }
        ptr2=ptr2.next
    }

    return true;
};

console.log(isPalindrome([1,2,2,1]));