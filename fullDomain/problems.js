// Longest common prefix

// const arr  = ["flow", "flower", "florine", "flurr"]

// let prefix =''

// let first  = arr[0]

// for(let i = 0 ;i<first.length;i++){
//     let char  = first[i]
//     if(arr.every((word)=> word[i]===char)){
//         prefix+=char
//     }else{
//         break
//     }
// }

// console.log(prefix)

////////////////////////////////////////////////////////////////////////////

// -Remove the duplicate from the nested array

// const arr = [[1,2,1],[3,2,2],[9,6,9]]

// const newarr = arr.map((item)=> [...new Set(item)])

// console.log(newarr)

///////////////////////////////////////////////////////////////////////////

// Convert string 1st character in upper case

// let str = 'haran'

// function capitalise(str){
//     return  str.slice(0,-1) + str[str.length-1].toUpperCase()
// }
// console.log(capitalise(str))

//////////////////////////////////////////////////////////////////////////

//reverse string in recurison

// let str = 'haran'

// function reverse(str){
//     if(str==='')return str
//     return reverse(str.slice(1)) + str[0]
// }
// console.log(reverse(str))

////////////////////////////////////////////////////////////////////////////

// -Find pelindromic sub-string

// const str = 'babad'
// //out = bab

// let arr  = []

// const isPalindrome = (str) => str === str.split('').reverse().join('')

// for(let i = 0 ;i<str.length;i++){
//     for(let j = i + 1 ;j<str.length;j++){
//         let sub = str.slice(i,j)
//         if(isPalindrome(sub)){
//             arr.push(sub)
//         }
//     }
// }
// arr.sort((a,b)=>b.length-a.length)
// console.log(arr[0])

//////////////////////////////////////////////////////////////////////////////

// -reverse the array and the elements [123, 456]  Output should be  [654, 321]

// const arr = [123,456]

// let rev = arr.reverse().map((item)=> Number(String(item).split('').reverse().join('')))

// console.log(rev)

//////////////////////////////////////////////////////////////////////////////

// Array.reduce(): sum of positive numbers in mixed array

// const arr = [1, -2, 3, 4, -5, 6];

// const sum = arr.reduce((acc,curr)=> curr>0?curr+acc:acc,0)

// console.log(sum)

///////////////////////////////////////////////////////////////////////////////

//- function to generate 6 digit random OTP

// function generateOtp() {
//   return Math.floor(100000 + Math.random() * 999999);
// }
// console.log(generateOtp());
   
////////////////////////////////////////////////////////////////////////////////

//generator function to reverse 1 to 20 1 sec delaty

// function* generator() {
//   for (let i = 10; i > 0; i--) {
//     yield i;
//   }
// }

// const gen = generator();
// const interval = setInterval(() => {
//     console.log(gen.next())
//   const { value, done } = gen.next();
//   if (!done) {
//     console.log(value);
//   } else {
//     clearInterval(interval);
//   }
// }, 1000);

///////////////////////////////////////////////////////////////////////////////

//proxy object implementation

// const person = {
//   name: "Haran",
//   age: 22,
//   email: "haran@gmail.com",
// };

// const proxyObj = new Proxy(person, {
//   get(target, handler) {
//     if (handler === "email") {
//       return "cannot access to view email";
//     } else {
//       return target[handler];
//     }
//   },
//   set(target, handler, value) {
//     if (handler === "email") {
//       console.log("you cannot change you email after login");
//     } else if (handler === "age" && value < 18) {
//       console.log("this user cannot access to this site (minor)");
//     } else if (handler === "name" && value.length < 4) {
//       console.log("name should contain atleaast  4 lettters");
//     } else {
//       target[handler] = value;
//     }
//   },
// });

// console.log(proxyObj.name);
// console.log(proxyObj.age);
// console.log(proxyObj.email);
// proxyObj.email = "haran11@gmail.com";
// proxyObj.age = 10;
// proxyObj.name = "ebi";
// proxyObj.age = 55;
// proxyObj.name = "virat";
// console.log(proxyObj.name);
// console.log(proxyObj.age);
// console.log(proxyObj.email);

////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////

//sort string using mergesort

// const str = "helloharan";

// function mergesort(str){
//     if(str.length < 2)return str
//     let mid  = Math.floor(str.length/2)
//     let left = mergesort(str.slice(0,mid))
//     let right = mergesort(str.slice(mid))

//     return merge(left.split(''),right.split('')).join('')
// }
// function merge(left,right){
//     let sorted = []
//     while(left.length&&right.length){
//         if(left[0]<right[0]){
//             sorted.push(left.shift())
//         }else{
//             sorted.push(right.shift())
//         }
//     }
//     return [...sorted,...left,...right]
// }

// console.log(mergesort(str));

////////////////////////////////////////////////////////////////////////////////

// Quick sort

// let arr = [6,7,5,1,3,2]

// function quicksort(arr){
//     if(arr.length<2)return arr
//     let pivot = arr[0]
//     let left  = []
//     let right = []

//     for(let i = 1 ;i<arr.length;i++){
//         if(arr[i]>pivot){
//             right.push(arr[i])
//         }else{
//             left.push(arr[i])
//         }
//     }
//     return [...quicksort(left),pivot,...quicksort(right)]
// }

// console.log(quicksort(arr))

////////////////////////////////////////////////////////////////////////////////

// minHeap

// class minHeap {
//   constructor() {
//     this.heap = [];
//   }
//   buildHeap(arr) {
//     this.heap = arr;
//     for (let i = Math.floor(this.heap.length / 2); i > 0; i--) {
//       this.heapifyDown(i);
//     }
//   }
//   insert(value) {
//     this.heap.push(value);
//     this.heapifyUp(this.heap.length - 1);
//   }
//   remove() {
//     if (this.heap.length === 0) return;
//     let min = this.heap[0];
//     let last = this.heap.pop();

//     if (this.heap.length > 0) {
//       this.heap[0] = last;
//       this.heapifyDown(0);
//     }
//     return min;
//   }
//   heapifyUp(index) {
//     let parent = Math.floor((index - 1) / 2);

//     while (index > 0 && this.heap[index] < this.heap[parent]) {
//       [this.heap[index], this.heap[parent]] = [
//         this.heap[parent],
//         this.heap[index],
//       ];
//       index = parent;
//       parent = Math.floor((index - 1) / 2);
//     }
//   }
//   heapifyDown(index) {
//     let smallest = index;
//     let left = 2 * index + 1;
//     let right = 2 * index + 2;

//     if (left < this.heap.length && this.heap[smallest] > this.heap[left]) {
//       smallest = left;
//     }
//     if (right < this.heap.length && this.heap[smallest] > this.heap[right]) {
//       smallest = right;
//     }
//     if (smallest !== index) {
//       [this.heap[index], this.heap[smallest]] = [
//         this.heap[smallest],
//         this.heap[index],
//       ];
//       this.heapifyDown(smallest);
//     }
//   }
//   print() {
//     console.log("heap : ", this.heap);
//   }
// }
// const heap = new minHeap();
// // heap.buildHeap([3, 6, 4, 8, 9]);
// heap.insert(10);
// heap.insert(20);
// heap.insert(30);
// heap.insert(40);
// // heap.remove();
// heap.print();

/////////////////////////////////////////////////////////////////////////////////

//max heap

// class MaxHeap {
//   constructor() {
//     this.heap = [];
//   }
//   buildHeap(arr) {
//     this.heap = arr;
//     for (let i = Math.floor(this.heap.length / 2); i > 0; i--) {
//       this.heapifyDown(i)
//     }
//   }
//   insert(value) {
//     this.heap.push(value);
//     this.heapifyUp(this.heap.length - 1);
//   }
//   remove() {
//     if (this.heap.length === 0) return null;
//     let max = this.heap[0];
//     let last = this.heap.pop();

//     if (this.heap.length > 0) {
//       this.heap[0] = last;
//       this.heapifyDown(0);
//     }
//     return max;
//   }
//   heapifyUp(index) {
//     let parent = Math.floor((index - 1) / 2);

//     while (index > 0 && this.heap[index] > this.heap[parent]) {
//       [this.heap[index], this.heap[parent]] = [
//         this.heap[parent],
//         this.heap[index],
//       ];
//       index = parent;
//       parent = Math.floor((index - 1) / 2);
//     }
//   }
//   heapifyDown(index) {
//     let largest = index;
//     let left = 2 * index + 1;
//     let right = 2 * index + 2;

//     if (left < this.heap.length && this.heap[largest] < this.heap[left]) {
//       largest = left;
//     }
//     if (right < this.heap.length && this.heap[largest] < this.heap[right]) {
//       largest = right;
//     }

//     if (largest !== index) {
//       [this.heap[index], this.heap[largest]] = [
//         this.heap[largest],
//         this.heap[index],
//       ];
//       this.heapifyDown(largest);
//     }
//   }
//   print() {
//     console.log("heap: ", this.heap);
//   }
// }
// const heap = new MaxHeap();
// // heap.buildHeap([1, 5, 8, 6, 3, 4]);
// heap.insert(10);
// heap.insert(20);
// heap.insert(30);
// heap.insert(40);
// heap.print();

///////////////////////////////////////////////////////////////////////////////////

//HeapSort

// function heapify(arr, n, i) {
//   let largest = i;
//   let left = 2 * i + 1;
//   let right = 2 * i + 2;

//   if (left < n && arr[largest] < arr[left]) {
//     largest = left;
//   }
//   if (right < n && arr[largest] < arr[right]) {
//     largest = right;
//   }

//   if (largest !== i) {
//     [arr[i], arr[largest]] = [arr[largest], arr[i]];
//     heapify(arr, n, largest);
//   }
// }

// function heapsort(arr) {
//   let n = arr.length;
//   for (let i = Math.floor(n / 2); i > 0; i--) {
//     heapify(arr, n, i);
//   }
//   for (let j = n - 1; j > 0; j--) {
//     [arr[0], arr[j]] = [arr[j], arr[0]];
//     heapify(arr, j, 0);
//   }
//   return arr;
// }
// const arr = [5, 6, 7, 8, 2, 1];
// console.log(heapsort(arr));

////////////////////////////////////////////////////////////////////////

// Hashtable

// class HashTable {
//   constructor(size) {
//     this.table = new Array(size);
//     this.size = size;
//     this.count = 0;
//   }
//   getLoadFactor() {
//     return this.count / this.size;
//   }
//   hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       total += key.charCodeAt(i);
//     }
//     return total % this.size;
//   }
//   insert(key, value) {
//     let index = this.hash(key);
//     if (!this.table[index]) {
//       this.table[index] = [];
//     }
//     for (let pair of this.table[index]) {
//       if (pair[0] === key) {
//         pair[1] = value;
//         return;
//       }
//     }
//     this.table[index].push([key, value]);
//     this.count++;
//     if (this.getLoadFactor() > 0.75) {
//       let newSize = Math.floor(this.size * 2);
//       this.rehash(newSize);
//     }
//   }

//   get(key) {
//     let index = this.hash(key);
//     for (let pair of this.table[index]) {
//       if (pair[0] === key) {
//         return pair[1];
//       }
//     }
//     return undefined;
//   }
//   remove(key) {
//     let index = this.hash(key);
//     if (!this.table[index]) return false;
//     this.table[index] = this.table[index].filter((item) => item[0] !== key);
//     this.count--;
//     if (this.getLoadFactor() < 0.35) {
//       let newSize = Math.floor(this.size / 2);
//       this.rehash(newSize);
//     }
//   }
//   rehash(size) {
//     console.log("resizing : ", size);
//     this.size = size;
//     this.count = 0;
//     let oldTable = this.table;
//     this.table = new Array(size);
//     for (let i = 0; i < oldTable.length; i++) {
//       let bucket = oldTable[i];
//       if (!bucket) continue;
//       for (let j = 0; j < bucket.length; j++) {
//         let [key, value] = bucket[j];
//         this.insert(key, value);
//       }
//     }
//   }
//   print() {
//     for (let i = 0; i < this.table.length; i++) {
//       if (this.table[i]) {
//         console.log(i, this.table[i]);
//       }
//     }
//     console.log("size : ", this.size);
//   }
// }
// const hash = new HashTable(2);
// hash.insert("name", "haran");
// hash.insert("mane", "haran");
// hash.insert("age", 22);
// hash.insert("place ", "malappuram");
// hash.insert("phone ", "7994102605");

// console.log(hash.get("name"));
// hash.print();

/////////////////////////////////////////////////////////////////////

//linear probing and qudratic probing

// class Hashtable {
//   constructor(size) {
//     this.table = new Array(size);
//     this.size = size;
//   }

//   hash(key) {
//     let total = 0;
//     for (let i = 0; i < key.length; i++) {
//       total += key.charCodeAt(i);
//     }
//     return total % this.size;
//   }
//   insert(key, value) {
//     let index = this.hash(key);
//     while (this.table[index] && this.table[index][0] !== key) {
//       index = (index + 1) % this.size;
//     }
//     this.table[index] = [key, value];
//   }
//   get(key) {
//     let index = this.hash(key);
//     while (this.table[index]) {
//       if (this.table[index][0] === key) {
//         return this.table[index][1];
//       }
//       index = (index + 1) % this.size;
//     }
//     return undefined;
//   }
//   remove(key) {
//     let index = this.hash(key);
//     while (this.table[index]) {
//       if (this.table[index][0] === key) {
//         this.table[index] = null;
//         return true;
//       }
//         index = (index+1)%this.size
//     }
//     return false;
//   }

//   print() {
//     for (let i = 0; i < this.table.length; i++) {
//       if (this.table[i]) {
//         console.log(i, this.table[i]);
//       }
//     }
//     console.log("size :", this.size);
//   }
// }

// const hash = new Hashtable(4);

// hash.insert("name", "haran");
// hash.insert("place", "Mankery");
// hash.insert("age", 21);

// console.log(hash.get("name"));
// console.log(hash.get("place"));
// console.log(hash.get("age"));

// hash.print();

/////////////////////////////////////////////////////////////////////////

// Double hashing

// class Hashtable{
//     constructor(size){
//         this.size = size
//         this.table = new Array(size)
//     }
//     hash(key){
//         let total = 0
//         for(let i = 0 ;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//         return total % this.size
//     }
//     hash2(key){
//         let total  = 0;
//         for(let i = 0 ;i<key.length;i++){
//             total += key.charCodeAt(i)
//         }
//         return 7 - (total%7)
//     }
//     insert(key,value){
//         let index  = this.hash(key)
//         let stepsize  = this.hash2(key)
//         let i = 0
//         while(this.table[index]&&this.table[index][0]!==key){
//             i++
//             index = (index + i * stepsize) % this.size
//         }
//         this.table[index] = [key,value]
//     }
//     get(key){
//         let index = this.hash(key)
//         let stepsize  = this.hash2(key)
//         let i = 0
//         while(this.table[index]){
//             if(this.table[index][0]===key){
//                 return this.table[index][1]
//             }
//             i++
//             index = (index + i*stepsize)%this.size
//         }
//         return undefined
//     }
//     remove(key){
//         let index = this.hash(key)
//         let stepsize  = this.hash2(key)
//         let i  = 0
//         while(this.table[index]){
//             if(this.table[index][0]===key){
//                 this.table[index] = null
//                 return true
//             }
//             i++
//             index = ( index + i * stepsize) % this.size
//         }
//         return false
//     }
//     print(){
//         for(let i = 0 ;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i])
//             }
//         }
//     }
// }

// let hash  = new Hashtable(10)
// hash.insert('name','haranhdfd')
// hash.insert('name','haran')
// hash.insert('age',22)
// hash.insert('place','mankery')
// hash.print()
// console.log('name: ',hash.get('name'))
// console.log('age : ',hash.get('age'))
// console.log('place : ',hash.get('place'))
// hash.remove('place')
// hash.print()

/////////////////////////////////////////////////////////////////////////

//valid anagram

// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;

//   let freq = {};

//   for (let char of str1) {
//     freq[char] = (freq[char] || 0) + 1;
//   }

//   for (let char of str2) {
//     if (!freq[char]) return false;
//     freq[char]--;
//   }
//   return true;
// }
// console.log(isAnagram("cat", "tac"));

///////////////////////////////////////////////////////////////////////////

// grouping anagram

// const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

// // Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// let obj = new Map()
// for(let str of strs){
//     let key = str.split('').sort().join('')
//     if(!obj.has(key)){
//         obj.set(key,[])
//     }
//     obj.get(key).push(str)
// }
// console.log(Array.from(obj.values()))

//////////////////////////////////////////////////////////////////////////////

// change multiple occurent letter capital

// const strs = "my name is haran";

// // out put like : 'my naMe is hArAN'

// let seenCount = new Map();
// let result = "";

// for (let str of strs) {
//   if (str === " ") {
//     result += " ";
//     continue;
//   }
//   seenCount.set(str, (seenCount.get(str) || 0) + 1);

//   if (seenCount.get(str) >= 2) {
//     result += str.toUpperCase();
//   } else {
//     result += str;
//   }
// }
// console.log(result);

///////////////////////////////////////////////////////////////////////////////

//Graph implementation

// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1])this.addVertex(vertex1)
//         if(!this.adjacencyList[vertex2])this.addVertex(vertex2)
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }
//     hasEdge(vertex1,vertex2){
//         return(
//             this.adjacencyList[vertex1].has(vertex2)&&
//             this.adjacencyList[vertex2].has(vertex1)
//         )
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex])return
//         for(let adj of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,adj)
//         }
//         delete this.adjacencyList[vertex]
//     }
//     print(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex,' -> '+[...this.adjacencyList[vertex]])
//         }
//     }
//     dfs(start,visited = new Set()){
//         if(visited.has(start))return
//         visited.add(start)
//         console.log(start)
//         for(let neighbour of this.adjacencyList[start]){
//             if(!visited.has(neighbour)){
//                 this.dfs(neighbour,visited)
//             }
//         }
//     }
//     // bfs(start){
//     //     let visited = new Set()
//     //     let queue = [start]
//     //     while(queue.length){
//     //         let vertex = queue.shift()
//     //         if(!visited.has(vertex)){
//     //             console.log(vertex)
//     //             visited.add(vertex)
//     //             queue.push(...this.adjacencyList[vertex])
//     //         }
//     //     }
//     // }
//     bfs(start){ //this is good and use queue so neighbours add in queue but first one is pop
//         let visited = new Set()
//         let queue = [start]
//         visited.add(start)
//         while(queue.length){
//             let vertex = queue.shift()
//             console.log(vertex)
//             for(let neighbour of this.adjacencyList[vertex]){
//                 if(!visited.has(neighbour)){
//                     visited.add(neighbour)
//                     queue.push(neighbour)
//                 }
//             }
//         }
//     }
//     clone(){
//         let clone = new Graph()
//         let visited = new Set()
//         const dfs = (vertex) =>{
//             if(visited.has(vertex))return
//             visited.add(vertex)
//             clone.addVertex(vertex)
//             for(let neighbour of this.adjacencyList[vertex]){
//                 clone.addVertex(neighbour)
//                 clone.addEdge(vertex,neighbour)
//                 if(!visited.has(neighbour)){
//                     dfs(neighbour)
//                 }
//             }
//         }
//         for(let vertex  in this.adjacencyList){
//             if(!visited.has(vertex)){
//                 dfs(vertex)
//             }
//         }
//         return clone
//     }
//     detectCycle(vertex,visited,parent){
//         visited.add(vertex)
//         for(let neighbour of this.adjacencyList[vertex]){
//             if(!visited.has(neighbour)){
//                 if(this.detectCycle(neighbour,visited,vertex)){
//                     return true
//                 }
//             }else if (neighbour !== parent){
//                 return true
//             }
//         }
//         return false
//     }

//     hasCycle(){
//         let visited = new Set()
//         for(let vertex in this.adjacencyList){
//             if(!visited.has(vertex)){
//                 if(this.detectCycle(vertex,visited,null)){
//                     return true
//                 }
//             }
//         }
//         return false
//     }
// }
// // A  -> B,D
// // B  -> A,C
// // C  -> B,A
// const g  = new Graph()
// g.addEdge('A','B')
// g.addEdge('B','C')
// g.addEdge('C','A')
// // g.addEdge('C','D')
// // g.addEdge('D','A')

// g.print()
// console.log('dfs')
// g.dfs('A')
// console.log('bfs')
// g.bfs('A')
// console.log('its cyclic ? : ',g.hasCycle())
// const cloneGraph  = g.clone()
// console.log('cloned Graph : ')
// cloneGraph.print()

////////////////////////////////////////////////////////////////////////////

//shortest path

// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//             this.adjacencyList[vertex] = new Set()
//         }
//     }
//     addEdge(vertex1,vertex2){
//         if(!this.adjacencyList[vertex1])this.addVertex(vertex1)
//         if(!this.adjacencyList[vertex2])this.addVertex(vertex2)
//         this.adjacencyList[vertex1].add(vertex2)
//         this.adjacencyList[vertex2].add(vertex1)
//     }
//     hasEdge(vertex1,vertex2){
//         return(
//             this.adjacencyList[vertex1].has(vertex2)&&
//             this.adjacencyList[vertex2].has(vertex1)
//         )
//     }
//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1].delete(vertex2)
//         this.adjacencyList[vertex2].delete(vertex1)
//     }
//     removeVertex(vertex){
//         if(!this.adjacencyList[vertex])return
//         for(let adj of this.adjacencyList[vertex]){
//             this.removeEdge(vertex,adj)
//         }
//         delete this.adjacencyList[vertex]
//     }
//     print(){
//         for(let vertex in this.adjacencyList){
//             console.log(vertex,' -> '+[...this.adjacencyList[vertex]])
//         }
//     }
//     dfs(start,visited = new Set()){
//         if(visited.has(start))return
//         visited.add(start)
//         console.log(start)
//         for(let neighbour of this.adjacencyList[start]){
//             if(!visited.has(neighbour)){
//                 this.dfs(neighbour,visited)
//             }
//         }
//     }

//     // bfs(start){
//     //     let visited = new Set()
//     //     let queue = [start]
//     //     while(queue.length){
//     //         let vertex = queue.shift()
//     //         if(!visited.has(vertex)){
//     //             console.log(vertex)
//     //             visited.add(vertex)
//     //             queue.push(...this.adjacencyList[vertex])
//     //         }
//     //     }
//     // }

//     clone(){
//         let clone = new Graph()
//         let visited = new Set()
//         const dfs = (vertex) =>{
//             if(visited.has(vertex))return
//             visited.add(vertex)
//             clone.addVertex(vertex)
//             for(let neighbour of this.adjacencyList[vertex]){
//                 clone.addVertex(neighbour)
//                 clone.addEdge(vertex,neighbour)
//                 if(!visited.has(neighbour)){
//                     dfs(neighbour)
//                 }
//             }
//         }
//         for(let vertex  in this.adjacencyList){
//             if(!visited.has(vertex)){
//                 dfs(vertex)
//             }
//         }
//         return clone
//     }
//     detectCycle(vertex,visited,parent){
//         visited.add(vertex)
//         for(let neighbour of this.adjacencyList[vertex]){
//             if(!visited.has(neighbour)){
//                 if(this.detectCycle(neighbour,visited,parent)){
//                     return true
//                 }
//             }else if (neighbour !== parent){
//                 return true
//             }
//         }
//         return false
//     }
//     hasCycle(){
//         let visited = new Set()
//         for(let vertex in this.adjacencyList){
//             if(!visited.has(vertex)){
//                 if(this.detectCycle(vertex,visited,null)){
//                     return true
//                 }
//             }
//         }
//         return false
//     }
//     bfs(start, target) {
//         let visited = new Set()
//         let queue = [[start,[start]]]
//         while(queue.length){
//             let [vertex,path] = queue.shift()
//             if(vertex === target){
//                 return path
//             }
//             for(let neighbour of this.adjacencyList[vertex]){
//                 if(!visited.has(neighbour)){
//                     queue.push([neighbour,[...path,neighbour]])
//                     visited.add(neighbour)
//                 }
//             }
//         }
//     }
// }

// const g  = new Graph()
// g.addEdge('A','B')
// g.addEdge('A','C')
// g.addEdge('B','D')
// g.addEdge('D','C')
// // g.addEdge('D','A')

// g.print()
// console.log('dfs')
// g.dfs('A')
// console.log('bfs')
// console.log("shortest path", g.bfs("A", "D").length)
// console.log('its cyclic ? : ',g.hasCycle())
// const cloneGraph  = g.clone()
// console.log('cloned Graph : ')
// cloneGraph.print()

//////////////////////////////////////////////////////////////////////////////

// Binary Search Tree Implementation BST

// class Node {
//   constructor(value) {
//     this.data = value;
//     this.right = null;
//     this.left = null;
//   }
// }
// class BST {
//   constructor() {    
//     this.root = null;
//   }
//   insert(value) {
//     let newNode = new Node(value);
//     if (!this.root) {
//       this.root = newNode;
//       return;
//     }
//     this.insertNode(this.root, newNode);
//   }
//   insertNode(node, newNode) {
//     if (node.data > newNode.data) {
//       if (!node.left) {
//         node.left = newNode;
//         return;
//       }
//       this.insertNode(node.left, newNode);
//     } else {
//       if (!node.right) {
//         node.right = newNode;
//         return;
//       }
//       this.insertNode(node.right, newNode);
//     }
//   }
//   search(node = this.root, value) {
//     if (!node) return false;
//     if (node.data === value) {
//       return true;
//     } else if (node.data > value) {
//       return this.search(node.left, value);
//     } else {
//       return this.search(node.right, value);
//     }
//   }
//   min(node = this.root) {
//     if (!node.left) return node.data;
//     return this.min(node.left);
//   }
//   delete(value) {
//     this.root = this.deleteNode(this.root, value);
//   }
//   deleteNode(node, value) {
//     if (!node) return;
//     if (node.data > value) {
//       node.left = this.deleteNode(node.left, value);
//     } else if (node.data < value) {
//       node.right = this.deleteNode(node.right, value);
//     } else {
//       if (!node.left && !node.right) return;
//       if (!node.left) return node.right;
//       if (!node.right) return node.left;

//       let min = this.min(node.right);
//       node.data = min;
//       node.right = this.deleteNode(node.right, min);
//     }
//     return node;
//   }
//   sum(node = this.root) {
//     if (!node) return 0;
//     return node.data + this.sum(node.left) + this.sum(node.right);
//   }
//   leftSum() {
//     if (!this.root || !this.root.left) return 0;
//     return this.sum(this.root.left);
//   }
//   height(node = this.root) {
//     if (!node) return 0;
//     let left = this.height(node.left);
//     let right = this.height(node.right);
//     return Math.max(left, right) + 1;
//   }  
//   leftHeight() {
//     if (!this.root || !this.root.left) return 0;
//     return this.height(this.root.left);  
//   }
//   maxDepth(node = this.root) {
//     if (!node) return 0;
//     let left = this.maxDepth(node.left);
//     let right = this.maxDepth(node.right);
//     return Math.max(left, right) + 1;
//   }
//   inorder(node = this.root, result = []) {
//     if (node) {
//       this.inorder(node.left, result);
//       result.push(node.data);
//       this.inorder(node.right, result);
//     }
//     return result;
//   }
//   degenerate() {
//     let values = this.inorder();
//     let newRoot = new Node(value[0]);
//     let current = newRoot.data;

//     for (let i = 1; i < values.length; i++) {
//       current.right = new Node(values[i]);
//       current = current.right;
//     }
//     this.root = newRoot;
//   }
//   depth(node = this.root) {
//     let d = 0;
//     while (node) {
//       d++;
//       node = node.left;
//     }
//     return d;
//   }
//   countNodes(node = this.root) {
//     if (!node) return 0;
//     return this.countNodes(node.left) + this.countNodes(node.right) + 1;
//   }
//   isPerfect() {
//     let depth = this.depth();
//     let totalNode = this.countNodes();
//     return totalNode === Math.pow(2, depth) - 1;
//   }

//   isValid(node = this.root, min = -Infinity, max = Infinity) {
//     if (!node) return true;
//     if (node.data > max || node.data < min) return false;
//     return (
//       this.isValid(node.left, min, node.data) &&
//       this.isValid(node.right, node.data, max)
//     );
//   }

//   countOfLeafNode(node = this.root) {
//     if (!node) return 0;
//     if (!node.right && !node.left) return 1;
//     return this.countOfLeafNode(node.left) + this.countOfLeafNode(node.right);
//   }
//   sumOfLeafNodes(node = this.root) {
//     if (!node) return 0;
//     if (!node.left && !node.right) return node.data;
//     return this.sumOfLeafNodes(node.left) + this.sumOfLeafNodes(node.right);
//   }
//   leftNodeCount(node = this.root) {
//     if (!node) return 0;
//     let count = 0;
//     if (node.left) {
//       count += 1;
//     }
//     count += this.leftNodeCount(node.left);
//     count += this.leftNodeCount(node.right);
//     return count;
//   }
//   degree(node = this.root) {
//     if (!node) return;
//     let degree = 0;
//     if (node.left) degree++;
//     if (node.right) degree++;
//     return degree;
//   }
//   closest(target) {
//     let current = this.root;
//     let closest = current.data;
//     while (current) {
//       if (Math.abs(current.data - target) < Math.abs(closest - target)) {
//         closest = current.data;
//       }

//       if (current.data > target) {
//         current = current.left;
//       } else if (current.data < target) {
//         current = current.right;
//       } else {
//         break;
//       }
//     }
//     return closest;
//   }

//   kthSmallest(k) {
//     let result = null;
//     let count = 0;
//     function inorder(node) {
//       if (!node || count >= k) return;
//       inorder(node.left);
//       count++;
//       if (count === k) {
//         result = node.data;
//         return;
//       }
//       inorder(node.right);
//     }
//     inorder(this.root);
//     return result;
//   }
//   kthLargest(k) {
//     let result = null;
//     let count = 0;
//     function inorder(node) {
//       if (!node || count >= k) return;
//       inorder(node.right);
//       count++;
//       if (count === k) {
//         result = node.data;
//         return;
//       }
//       inorder(node.left);
//     }
//     inorder(this.root);
//     return result;
//   }
//   levelOrder() {
//     let queue = [];
//     queue.push(this.root);
//     while (queue.length) {
//       let current = queue.shift();
//       console.log(current.data);
//       if (current.left) {
//         queue.push(current.left);
//       }
//       if (current.right) {
//         queue.push(current.right);
//       }
//     }
//   }
//   postOrder(node = this.root) {
//     if (node) {
//       this.postOrder(node.right);
//       this.postOrder(node.left);
//       console.log(node.data);
//     }
//   }
// }

// const tree = new BST();
// tree.insert(10);
// tree.insert(11);
// tree.insert(9);
// tree.insert(12);
// tree.insert(8);

// console.log("Inorder Traversal:", tree.inorder());
// console.log("Max Depth:", tree.maxDepth());
// console.log("Height:", tree.height());
// console.log("Left Height:", tree.leftHeight());
// console.log("Sum of all nodes:", tree.sum());
// console.log("Left Subtree Sum:", tree.leftSum());
// console.log("Is Perfect Tree?", tree.isPerfect());
// console.log("Is Valid BST?", tree.isValid());
// console.log("Leaf Node Count:", tree.countOfLeafNode());
// console.log("Leaf Node Sum:", tree.sumOfLeafNodes());
// console.log("Degree of root:", tree.degree());
// console.log("Closest to 10:", tree.closest(10));
// console.log("Kth Smallest (2):", tree.kthSmallest(2));
// console.log("Kth Largest (2):", tree.kthLargest(2));
// console.log("Search for 9:", tree.search(tree.root, 9));
// console.log("Left Node Count:", tree.leftNodeCount());

// console.log("\nLevel Order Traversal:");
// tree.levelOrder();

// console.log("\nPost Order Traversal:");
// tree.postOrder();

//     10
//    /  \
//   9    11
//  /       \
// 8         12

/////////////////////////////////////////////////////////////////////////////

//trie

// class trieNode {
//   constructor() {
//     this.children = {};
//     this.isEndOfWord = false;
//   }
// }

// class Trie {
//   constructor() {
//     this.root = new trieNode();
//   }
//   insert(word) {
//     let node = this.root;
//     for (let char of word) {
//       if (!node.children[char]) {
//         node.children[char] = new trieNode();
//       }
//       node = node.children[char];
//     }
//     node.isEndOfWord = true;
//   }
//   search(word) {
//     let node = this.root;
//     for (let char of word) {
//       if (!node.children[char]) return false;
//       node = node.children[char];
//     }
//     return node.isEndOfWord;
//   }
//   startsWith(prefix) {
//     let node = this.root;
//     for (let char of prefix) {
//       if (!node.children[char]) return false;
//       node = node.children[char];
//     }
//     return true;
//   }
//   autoComplete(prefix) {
//     let node = this.root;
//     for (let char of prefix) {
//       if (!node.children[char]) return [];
//       node = node.children[char];
//     }
//     let words = [];
//     function dfs(node, path) {
//       if (node.isEndOfWord) {
//         words.push(path);
//       }
//       for (let char in node.children) {
//         dfs(node.children[char], path + char);
//       }
//     }
//     dfs(node, prefix);
//     return words;
//   }
//   longestCommonPrefix() {
//     let prefix = "";
//     let node = this.root;
//     while (true) {
//       let keys = Object.keys(node.children);
//       console.log(keys)
//       if (keys.length !== 1 || node.isEnd) break;
//       let char = keys[0];
//       prefix += char;
//       node = node.children[char];
//     }
//     return prefix;
//   }
// }

// const trie = new Trie();
// trie.insert("cat");
// trie.insert("cap");
// trie.insert("car");
// trie.insert("cart");
// trie.insert("dog");

// console.log(trie.search("ca"));
// console.log(trie.startsWith("cat"));
// console.log(trie.autoComplete("ca"));

// const trie2 =new Trie()
// trie2.insert('fight')
// trie2.insert('flower')
// trie2.insert('floor')
// trie2.insert('flick')

// console.log(trie2.longestCommonPrefix())


// rate limiter

// const express = require('express')
// const app = express()
// const rateLimit = require('express-rate-limit')

// let limiter  = rateLimit({
//    windowMS:60*1000,
//    max:5,
//    message:'rate limit exceed please try after one minute'
// })

// app.get('/home',limiter ,(req,res)=>{
//    res.send('hello this is home page')
// })

// app.listen(3000,()=>console.log('server running port  3000'))

/////////////////////////////////////////////////////////////////////////////

// longest non repeating substring

// function longestNonRepeatingSubstring(str){
//     let longest = ''
//     let substring = ''

//     for(let char of str){
//         if(substring.includes(char)){
//             substring = substring.slice(substring.indexOf(char)+1)
//         }
//         substring+=char
//         if(substring.length > longest.length){
//             longest = substring
//         }
//     }
//     return longest
// }

// console.log(longestNonRepeatingSubstring('abcdabcabc'))

///// using set /////

// const longestNonRepeatingSubstring = function (s) {
//     let set  = new Set()
//     let left = 0
//     let maxLength = 0

//     for(let right  = 0 ;right<s.length;right++){
//         while(set.has(s[right])){
//             set.delete(s[left])
//             left++
//         }
//         set.add(s[right])
//         maxLength = Math.max(set.size,maxLength)
//     }
//     return maxLength
// }

// console.log(longestNonRepeatingSubstring('abcdabcabc'))

///////////////////////////////////////////////////////////////////////////////

// fibinocci series

// function printFib(num,a=0,b=1){
//     if(num===0)return 
//     console.log(b)
//     return printFib(num-1,b,a+b)
// }
// console.log(printFib(10))

/////////////////////////////////////////////////////////////////

// ReadableStream WritableStream pipe

// const fs  = require('fs')

// const writeStream = fs.createWriteStream('input.txt')

// writeStream.write('\n helloo Haran')

// writeStream.end()

// writeStream.on('finish',()=>{
//     console.log('file writed successfully')
// })
// writeStream.on('error',(err)=>{
//     console.log('error: ',err)
// })

// const readStream = fs.createReadStream('input.txt','utf-8')

// readStream.on('data',(chunk)=>{
//     console.log('data is : ',chunk)
// })
// readStream.on('end',()=>{
//     console.log('file readed successfully')
// })
// readStream.on('error',(err)=>{
//     console.log('error',err)
// })

//////////////////

// const fs = require('fs')

// const readStream = fs.createReadStream('input.txt','utf-8')
// const writeStream = fs.createWriteStream('output.txt')

// // const writeStream = fs.createWriteStream('output.txt',{flags:'a'}) 👈🏻 for appenging

// readStream.pipe(writeStream)

// readStream.on('end',()=>{
//     console.log('file copied successfully ')
// })



