import node from "./list-node";

// Linked list class.
class LinkedList {
    constructor() {
        this.head = null;
    }
    
    append(data) {
        const newNode = node(data);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        for (let i = this.head; i; i = i.next) {
            if (i.next === null) {
                i.next = newNode;
                return;
            }
        }
    }

    prepend(data) {
        const newNode = node(data);
        newNode.next = this.head;
        this.head = newNode;
    }

    size() {
        let length = 0;
        for (let i = this.head; i; i = i.next) {
            length += 1;
        }
        if (length === 1) {
            console.log(`This linked list has ${length} node.`);
        } else {
            console.log(`This linked list has ${length} nodes.`);
        }
    }

    first() {
        console.log(this.head);
    }
}

export default LinkedList;
