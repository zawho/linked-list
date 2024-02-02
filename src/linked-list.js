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
}

export default LinkedList;
