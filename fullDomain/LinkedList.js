// linkedList implementatin

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  constructor() {
    this.head = null;
  }
  addFirst(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }
  addLast(value) {
    if (!this.head) {
      console.log("list is empty");
      return;
    }
    let newNode = new Node(value);
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }
  addAt(value, position) {
    if (position < 0) {
      console.log("invalid position");
      return;
    }
    let newNode = new Node(value);
    if (position === 1) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }
    let current = this.head;
    let prev = null;
    let i = 0;
    while (current !== null && position > i) {
      prev = current;
      current = current.next;
      i++;
    }
    if (current === null) {
      console.log("position out of range");
      return;
    }
    prev.next = newNode;
    newNode.next = current;
  }
  removeFirst() {
    if (!this.head) {
      console.log("list is empty");
      return;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    this.head = this.head.next;
  }
  removeLast() {
    if (!this.head) {
      console.log("list is empty");
      return;
    }
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
  }
  removeAt(position) {
    if (position < 0) {
      console.log("invalid position");
      return;
    }
    if (position === 1) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    let prev = null;
    let i = 0;
    while (current !== null && position > i) {
      prev = current;
      current = current.next;
      i++;
    }
    if (prev === null) {
      console.log("position out of range");
      return;
    }
    prev.next = current.next;
  }
  findMiddle() {
    let slow = this.head;
    let fast = this.head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.value;
  }
  reverse() {
    let current = this.head;
    let prev = null;
    while (current !== null) {
      let nextNode = current.next;
      current.next = prev;
      prev = current;
      current = nextNode;
    }
    this.head = prev;
  }
  merge(otherList) {
    if (!this.head) {
      this.head = otherList.head;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = otherList.head;
  }
  makecircular() {
    if (!this.head) {
      console.log("list is empty");
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = this.head;
  }
  isCircular() {
    if (!this.head) {
      console.log("list is empty");
      return false;
    }
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }
  removeOdd() {
    if (!this.head) {
      console.log("list is empty");
      return;
    }
    if (this.head && this.head.value % 2 !== 0) {
      this.head = this.head.next;
    }
    let current = this.head;
    while (current && current.next) {
      if (current.next.value % 2 !== 0) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }
  }
sum(){
    let sum = 0
    let index = 0
    let target = 1
    let current = this.head
    while(current){
        if(target===index){
            sum+=current.value
            target *= 2
        }
        index++
        current = current.next
    }
    return sum
}
  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
  // print() {
  //   if (!this.head) {
  //     console.log("list is empty");
  //     return;
  //   }
  //   let current = this.head;
  //   let visited = new Set();
  //   while (current && !visited.has(current)) {
  //     console.log(current.value);
  //     visited.add(current);
  //     current = current.next;
  //   }
  // }
}

let ll = new linkedList();
ll.addFirst(1);
ll.addFirst(2);
ll.addFirst(3);
ll.addFirst(4);
ll.addFirst(5);
// ll.addLast(50);
// ll.removeLast();
// ll.removeFirst();
// ll.addAt(100, 2);
// ll.removeAt(3);
// ll.reverse();
// console.log("middle", ll.findMiddle());
ll.removeOdd();
ll.print();
// ll.makecircular();
// console.log("is circular: ", ll.isCircular());
// ll.print();
// let l2 = new linkedList();
// ll.addFirst(100);
// ll.addFirst(200);
// ll.addFirst(300);
// ll.addFirst(400);
// ll.merge(l2);
// ll.print();
