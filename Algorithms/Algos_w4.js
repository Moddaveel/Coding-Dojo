class Node{
    constructor(value){
        this.value = value
        this.next = null
    }
}


class SLList{
    constructor(){
        this.head = null
    }

    addToFront(value) {
        // step #1 Make a new node
        var newNode = new Node(value);
        
        // Check to see if there is a head
        if(this.head == null) {
            this.head = newNode;
            return this;
        }

        // if there is a head
        newNode.next = this.head;
        this.head = newNode;
        return this;
    }

    addToBack(value) {
        var newNode = new Node(value);
        let runner = runner.next;
        if(this.head == null) {
            this.head = newNode;
            return this;
        }
    }

    removeFromFront() {

    }

    removeFromBack() {

    }

   // print the singly linked list
    printValues() {
        // step #0 [EDGE CASE]) handle a case where there is nothing in the list
        if(this.head == null){
            console.log("There's nothing in the list! Dummy!")
            // return 'this' to end function and allow chaining of methods
            return this
        }
        //step #1) establish a runner to traverse through the list
        var runner = this.head;
        // NOTE: we can move runner all the way into null because our loop will exit as soon as runner hits null, avoiding any errors with printing
        while(runner != null) {
            // step #2) print the values at each iteration before moving the runner!
            console.log(`The current value is: ${runner.value}`)
            runner = runner.next
        }
        console.log("We have hit the end of the list!")
        // return 'this' to end function and allow chaining of methods
        return this
    }
}



// function contains(val) {
//     var runner = this.head;
//     while(runner.next!=null){
//         if(runner.value==val){
//             return true;
//         }
//         runner=runner.next;
//     }
//     if(runner.value==val){
//         return true;
//     }
//     return false;
// }



    function contains(value) {
        var node=this.head
        while(node){
            if(node.value === value){
            console.log('true')
            return true;
            }
            node=node.next;
        }
        console.log('false')
        return false
    }



// function print(){
//     let result = "";
//     let runner = this.head;
//     while(runner != null){
//         result += `${runner.value} 👉 ⇶✨ `; 
//         runner = runner.next;
//     }
//     console.log(result.slice(0, result.length - 6));
// }

    function minToFront(){
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

    function maxToBack(){
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

    // given a value and a location within your list, add that value as a new node after the given location
    function appendValue(val, loc) {
        var runner = this.head
        var newNode = new Node(val)
        var temp = 0

        if (this.head == null){
            return "Empty List Here!"
        }
        while(runner){
            if (runner.next == val){
                temp = runner.next
                runner.next = runner.next.next
            }
            if(runner.next = loc){
                runner.next.next = newNode
            }
            runner = runner.next
            return temp
        }  
    }

// given a value and a location within your list, add that value as a new node before the given location
// prependValue(value, loc){ 
//     // find the given node
// }

const sll = new SLList();
sll.addToFront(9)
sll.addToFront(7)
sll.addToFront(6)
sll.addToFront(3)
sll.addToFront(8)
sll.printValues()
sll.appendValue(7, 3)
sll.printValues()

// 
    prepend(value){
        var newNode = new Node (value);
        var runner = this.head
        var walker
        var counter = 0
        while(newNode){
            if (runner.next != null & counter < loc){
                counter++
                walker = runner;
                runner.next;
            }
            newNode.next = runner.next
            walker.next = newNode
        }
        return this;
    }