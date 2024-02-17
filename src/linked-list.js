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
        return length;
    }

    first() {
        console.log(this.head);
        return this.head;
    }

    last() {
        let last;
        for (let i = this.head; i; i = i.next) {
            if (i.next === null) {
                last = i;
            }
        }
        console.log(last);
        return last;
    }

    at(index) {
        let current;
        for (let i = this.head; i; i = i.next) {
            if (i === this.head) {
                current = 0;
            } else {
                current += 1;
            }
            if (current === index) {
                console.log(i);
                return i;
            }
        }
        console.log(`There is no node at index ${index}.`);
        return null;
    }

    pop() {
        let current;
        let nextToLast;
        for (let i = this.head; i; i = i.next) {
            if (i === this.head) {
                current = 0;
            } else {
                current += 1;
            }
            if (i.next === null && i !== this.head) {
                nextToLast = current - 1;
            }
            if (i === this.head && i.next === null) {
                this.head = null;
                nextToLast = 0;
            }
        }
        for (let i = this.head; i; i = i.next) {
            if (i === this.head) {
                current = 0;
            } else {
                current += 1;
            }
            if (nextToLast >= 0 && current === nextToLast) {
                i.next = null;
            }
        }
        console.log(this);
    }

    contains(data) {
        for (let i = this.head; i; i = i.next) {
            if (i.value === data) {
                console.log(i);
                return true;
            }
        }
        console.log(`This list does not contain "${data}".`);
        return false;
    }

    find(data) {
        let index;
        for (let i = this.head; i; i = i.next) {
            if (i === this.head) {
                index = 0;
            } else {
                index += 1;
            }
            if (i.value === data) {
                console.log(index);
                return index;
            }
        }
        console.log(`This list does not contain "${data}".`);
        return null;
    }

}

export default LinkedList;
