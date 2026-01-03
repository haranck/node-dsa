
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

function heapify(arr, n, i) {
  let largest = i;
  let left = 2 * i + 1;
  let right = 2 * i + 2;

  if (left < n && arr[largest] < arr[left]) {
    largest = left;
  }
  if (right < n && arr[largest] < arr[right]) {
    largest = right;
  }

  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    heapify(arr, n, largest);
  }
}

function heapsort(arr) {
  let n = arr.length;
  for (let i = Math.floor(n / 2); i > 0; i--) {
    heapify(arr, n, i);
  }
  for (let j = n - 1; j > 0; j--) {
    [arr[0], arr[j]] = [arr[j], arr[0]];
    heapify(arr, j, 0);
  }
  return arr;
}
const arr = [5, 6, 7, 8, 2, 1];
console.log(heapsort(arr));