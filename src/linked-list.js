import node from "./list-node";

// Linked list class.
class LinkedList {
    constructor() {
        this.head = null;
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
}

export default LinkedList;
