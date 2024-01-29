import node from "./list-node";

// Linked list factory.
function linkedList() {
    const listObj = {
        1: node(),
        append: function append() {
            this[Object.keys(this).length + 1] = node();
        }
    }
    return listObj;
}

export default linkedList;
