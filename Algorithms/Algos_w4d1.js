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


function contains(value){
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

const sll = new SLList();
sll.addToFront(-3)
sll.printValues()