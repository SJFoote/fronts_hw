class SLLNode {
    //constructor
    constructor(value){
        this.data = value;
        this.next = null;
    }
    
}

class SLL {
    constructor() {
        this.head = null;
    }
    // methods
    addFront(value) {
        var newNode = new SLLNode(value);
        if (this.head == null) { // if the list was empty from before, put the new node at the start of the list. i.e. set the head to point to the new node
            this.head = newNode;
            return this
        }
        newNode.next = this.head;
        this.head = newNode        
        return this
    }

    remove(value) {
        if (this.SLL == null) {
            return null
        }
        newNode.next = this.head;
        this.head = newNode;
        return this
    }

    front() {
        console.log(this.SLL = this.data)
    }
}

var mySLL = new SLL();
mySLL.addFront(12);
console.log(mySLL)

var mySLL = new SLL();
mySLL.addFront(33);
console.log(mySLL)

mySLL.remove(33)
console.log(mySLL.head.next)

console.log(mySLL.front())
