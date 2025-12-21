// stack implementation

// class Stack{
//     constructor(){
//         this.stack = []
//     }
//     push(value){
//         this.stack.push(value)
//     }
//     pop(){
//         return this.stack.pop()
//     }
//     peek(){
//         return this.stack[this.stack.length-1]
//     }
//     isEmpty(){
//         return this.stack.length===0
//     }

//     print(){
//         console.log('stack : ',this.stack)
//     }
// }

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.print()
// console.log('popped : ',stack.pop())
// console.log('peek : ',stack.peek())
// console.log('isEmpty  : ',stack.isEmpty())
// stack.print()

///////////////////////////////////////////////////////////////////////

//queue implemntaion

// class Queue{
//     constructor(){
//         this.queue = []
//     }
//     enqueue(value){
//         this.queue.push(value)
//     }
//     dequeue(){
//         return this.queue.shift()
//     }
//     front(){
//         return this.queue[0]
//     }
//     isEmpty(){
//         return this.queue.length ===0
//     }
//     print(){
//         console.log("queue : ",this.queue)
//     }
// }
// const q = new Queue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)

// q.print()
// console.log('dequeue ; ',q.dequeue())
// console.log('fornt ; ',q.front())
// q.print()

///////////////////////////////////////////////////////////////////////

// stack using queue
// push pop peek empty using enqueue dequeue peek empty

// class Stack{
//     constructor(){
//         this.q1 = []
//         this.q2 = []
//     }
//     push(value){
//         while(this.q1.length){
//             this.q2.push(this.q1.shift())
//         }
//         this.q1.push(value)
//         while(this.q2.length){
//             this.q1.push(this.q2.shift())
//         }
//     }
//     pop(){
//         return this.q1.shift()
//     }
//     peek(){
//         return this.q1[0]
//     }
//     print(){
//         console.log('stack : ',this.q1)
//     }
// }

// const stack  = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.push(40)
// stack.print()
// console.log('popped ' , stack.pop())
// console.log('front ' , stack.peek())
// stack.print()

///////////////////////////////////////////////////////////////////////

// queue using stack
// enqueue dequeue peek empty using push pop peek empty

// class Queue{
//     constructor(){
//         this.stack1 = []
//         this.stack2 =[]
//     }
//     enqueue(value){
//         this.stack1.push(value)
//     }
//     dequeue(){
//         if(this.stack2.length===0){
//             while(this.stack1.length){
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2.pop()
//     }
//     peek(){
//         return this.stack2[this.stack2.length-1]
//     }
//     print(){
//       console.log('queue : ',[...this.stack2].reverse().concat(this.stack1))
//     }
// }
// const q = new Queue()
// q.enqueue(10)
// q.enqueue(20)
// q.enqueue(30)
// q.enqueue(40)
// q.print()
// console.log('dequeued : ',q.dequeue())
// console.log('peek : ',q.peek())
// q.print()

///////////////////////////////////////////////////////////////////////

// stack implementation using linked list

// class Node{
//     constructor(value){
//         this.value = value
//         this.next  = null
//     }
// }
// class Stack {
//     constructor(){
//         this.head = null
//     }
//     push(value){
//         let newNode = new Node(value)
//         newNode.next = this.head
//         this.head = newNode
//     }
//     pop(){
//         if(!this.head)return 'stack is empty'
//         let poped  = this.head.value
//         this.head = this.head.next
//         return poped
//     }
//     peek(){
//         if(!this.head)return 'stack is empty'
//         return this.head.value
//     }
//     isEmpty(){
//         return this.head===null
//     }
//     print(){
//         let current  = this.head
//         while(current){
//             console.log(current.value)
//             current = current.next
//         }
//     }
// }

// const stack = new Stack()

// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.push(40);

// stack.print();

// console.log("Peek:", stack.peek());
// console.log("isEmpty :", stack.isEmpty());
// console.log("Popped:", stack.pop());
// stack.print();

///////////////////////////////////////////////////////////////////////

// reverese stirng use stack

// const str = 'hello good night'
// function reverse(str){
//     let splits = str.split(' ')
//     let stack = []
//     for(let i = 0 ;i<splits.length;i++){
//         stack.push(splits[i])
//     }
//     let finals = ''
//     while(stack.length){
//         let current =  stack.pop()
//         finals+= ' ' +current
//     }
//     return finals.trim()
// }
// console.log(reverse(str))

//////////////////////////////////////////////////////////////////////////

//sort a stack using tempstack

// function sortStack(stack){
//   let tempStack = []
//   while(stack.length){
//       let temp = stack.pop()
//       while(tempStack.length>0&& tempStack[tempStack.length-1]>temp){
//           stack.push(tempStack.pop())
//       }
//       tempStack.push(temp)
//   }
//   return tempStack
// }
// const stack = [3,2,5,4,1]
// console.log(sortStack(stack))

///////////////////////////////////////////////////////////////////////////

// reverse a stack

// class Stack{
//     constructor(){
//         this.stack = []
//     }
//     push(value){
//         this.stack.push(value)
//     }
//     pop(){
//         return this.stack.pop()
//     }
//     peek(){
//         return this.stack[this.stack.length-1]
//     }
//     isEmpty(){
//         return this.stack.length === 0
//     }
//     print(){
//         console.log('stack : ',this.stack)
//     }
// }
// function insertAtBottom(stack,item){
//     if(stack.isEmpty()){
//         stack.push(item)
//         return
//     }
//     let top  = stack.pop()
//     insertAtBottom(stack,item)
//     stack.push(top)
// }
// function reverseStack(stack){
//     if(stack.isEmpty())return
//     let top = stack.pop()
//     reverseStack(stack)
//     insertAtBottom(stack,top)
// }

// const stack = new Stack()
// stack.push(1)
// stack.push(2)
// stack.push(3)
// stack.push(4)
// stack.push(5)

// stack.print()

// const reverse = reverseStack(stack)

// console.log("reverse")
// stack.print()

///////////////////////////////////////////////////////////////////////////

// reverse a queue

// class Queue{
//     constructor(){
//         this.queue = []
//     }
//     enqueue(value){
//         this.queue.push(value)
//     }
//     dequeue(){
//         return this.queue.shift()
//     }
//     peek(){
//         return this.queue[0]
//     }
//     isEmpty(){
//         return this.queue.length === 0
//     }
//     print(){
//         console.log("Queue : ",this.queue)
//     }
// }

// function reverseQueue(queue){
//     // let stack = []
//     // while(!queue.isEmpty()){
//     //     stack.push(queue.dequeue())
//     // }
//     // while(stack.length){
//     //     queue.enqueue(stack.pop())
//     // }
//     //// using recursion
//     if(queue.isEmpty())return
//     let front  = queue.dequeue()
//     reverseQueue(queue)
//     queue.enqueue(front)
// }

// const q  = new Queue()

// q.enqueue(1)
// q.enqueue(2)
// q.enqueue(3)
// q.enqueue(4)
// q.enqueue(5)
// q.print()

// reverseQueue(q)
// console.log('after reversing : ')
// q.print()

////////////////////////////////////////////////////////////////////////////

//circular queue

// class Circular{
//     constructor(k){
//         this.size  = k
//         this.queue = []
//     }
//     enqueue(value){
//         if(this.size === this.queue.length){
//             console.log('queue is full')
//             return
//         }
//         this.queue.push(value)
//     }
//     dequeue(){
//         if(!this.queue.length){
//             console.log('dequeue not possible queue empty')
//             return
//         }
//         return this.queue.shift()
//     }
//     front(){
//         return this.queue[0]
//     }
//     rear(){
//         return this.queue[this.queue.length -1]
//     }
//     isEmpty(){
//         return this.queue.length === 0
//     }
//     isFull(){
//         return this.size ===  this.queue.length
//     }
//     print(){
//         console.log('Circular : ',this.queue)
//     }
// }
// const circular = new Circular(3)

// circular.enqueue(10)
// circular.enqueue(20)
// circular.enqueue(30)
// circular.enqueue(40)

// // circular.dequeue()

// console.log("front",circular.front())
// console.log("rear",circular.rear())
// console.log(circular.isEmpty())
// console.log(circular.isFull())
// circular.print()

/////////////////////////////////////////////////////////////////////////

//dequeue

// class Deque {
//   constructor() {
//     this.items = [];
//   }

//   enqueueFront(value) {
//     this.items.unshift(value); // add at front
//   }

//   enqueueRear(value) {
//     this.items.push(value); // add at rear
//   }

//   dequeueFront() {
//     return this.items.shift(); // remove from front
//   }

//   dequeueRear() {
//     return this.items.pop(); // remove from rear
//   }

//   peekFront() {
//     return this.items[0];
//   }

//   peekRear() {
//     return this.items[this.items.length - 1];
//   }

//   print() {
//     console.log("Deque:", this.items);
//   }
// }

// const dq = new Deque();
// dq.enqueueRear(10);
// dq.enqueueRear(20);
// dq.enqueueFront(5);
// dq.enqueueRear(30);
// dq.print(); // [5, 10, 20, 30]
// dq.dequeueFront(); // removes 5
// dq.dequeueRear();  // removes 30
// dq.print(); // [10, 20]

////////////////////////////////////////////////////////////////////////////////////

// Undo REdo App

// class UndoRedo {
//   constructor() {
//     this.undoStack = [];
//     this.redoStack = [];
//     this.current = "";
//   }

//   type(newText) {
//     this.undoStack.push(this.current);
//     this.current = newText;
//     this.redoStack = [];
//     console.log("Typed:", this.current);
//   }

//   undo() {
//     if (this.undoStack.length === 0) {
//       console.log("Nothing to undo");
//       return;
//     }
//     this.redoStack.push(this.current);
//     this.current = this.undoStack.pop();
//     console.log("Undo -> Current:", this.current);
//   }

//   redo() {
//     if (this.redoStack.length === 0) {
//       console.log("Nothing to redo");
//       return;
//     }
//     this.undoStack.push(this.current);
//     this.current = this.redoStack.pop();
//     console.log("Redo -> Current:", this.current);
//   }

//   show() {
//     console.log("Current:", this.current);
//   }
// }

// const editor = new UndoRedo();

// editor.type("Hello");
// editor.type("Hello World");
// editor.type("Hello World!!!");
// editor.undo();
// editor.undo();
// editor.redo();
// editor.show();

/////////////////////////////////////////////////////////////////////////////////////

// insert elements in ascending order to a stack using recursion

// function insertSort(stack,element){
//     if(stack.length === 0 ||stack[stack.length-1] <= element){
//         stack.push(element)
//         return
//     }
//     let top  = stack.pop()
//     insertSort(stack,element)
//     stack.push(top)
// }
// // [2,4,1,5,3]
// let stack =[]
// let i  = 0
// while(i <= 5){
//     let random = Math.floor(Math.random()*100)
//     insertSort(stack,random)
//     i++
// }
// console.log(stack)

//////////////////////////////////////////////////////////////////////////////

// insert elements in ascending order to a stack using tempStack

// function insertSort(stack,element){
//     let tempStack = []

//     while(stack.length&&stack[stack.length-1] > element){
//         tempStack.push(stack.pop())
//     }
//     stack.push(element)
//     while(tempStack.length){
//         stack.push(tempStack.pop())
//     }

// }
// let stack =[] 
// let i  = 0
// while(i <= 2){
//     let random = Math.floor(Math.random()*100)
//     insertSort(stack,random)
//     i++
// }
// console.log(stack)

////////////////////////////////////////////////////////////////////////////

//Sort a Stack Using Recursion

// function insertItems(stack, element) {
//   if (stack.length === 0 || stack[stack.length - 1] <= element) {
//     stack.push(element);
//     return;
//   }
//   let top = stack.pop();
//   insertItems(stack, element);
//   stack.push(top);
// }

// function sortStack(stack) {
//   if (stack.length === 0) return;
//   let top = stack.pop();
//   sortStack(stack);
//   insertItems(stack, top);
// }
// const stack = [2, 3, 1, 4, 5, 6];
// sortStack(stack);
// console.log(stack);
