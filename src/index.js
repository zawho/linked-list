import node from "./list-node";
import LinkedList from "./linked-list";

const node1 = node(1);
const node2 = node(2);
const node3 = node(3);
node1.next = node2;
node2.next = node3;

const testList = new LinkedList(node1);

console.log(testList);