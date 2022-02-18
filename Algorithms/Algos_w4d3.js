minToFront(){
    if(this.head == null){
        return;
    }
    
    let currentMinPrev = this.head;
    let currentPrev = this.head;
    let currentMin = this.head;
    let runner = this.head;
    while(runner.next != null){
        if(runner.value < currentMin.value){
            currentMin = runner;
            currentMinPrev = currentPrev;
        }

        if(runner != this.head){
            currentPrev = currentPrev.next;
        }
        runner = runner.next;
    }

    //Testing the last node in the list
    if(runner.value < currentMin.value){
        currentMin = runner;
        currentMinPrev = currentPrev;
    }

    //min value was already the head
    if(currentMin == this.head){
        console.log(currentMin.value);
        return;
    } 
    //min value was not already at the head:

    //Set the node prior to the minmum node to minimumNode.next
    currentMinPrev.next = currentMin.next;
    
    //minimumNode.next = this.head
    currentMin.next = this.head;
    //this.head = minimumNode
    this.head = currentMin;
}

maxToBack(){
    // step #0 [EDGE CASE]) handle a case where there is nothing in the list
    if(this.head == null){
        return "There is nothing in your list >:("
    }
    var runner = this.head;
    var temp = this.head;
    //getting maximum value and setting it to temp
    while(runner) {
        if (runner.value>=temp.value) {
            temp = runner
        }
        runner = runner.next
    }
    // edge case if max is in front
    if (temp.value === this.head.value) {
        this.removeFromFront()
        this.addToBack(temp.value)
        return null
    }
    // edge case if max is in back
    if (temp.next == null) {
        return ("Your max is in the back already!")
    }
    //setting node right before maximum to skip over the maximum node
    var runner2 = this.head;
    while(runner2) {
        if (runner2.next===temp) {
            runner2.next = runner2.next.next;
            break;
        }
        runner2 = runner2.next
    }
    this.addToBack(temp.value)
}