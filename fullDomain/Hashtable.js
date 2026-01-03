
// Hashtable

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
    this.count = 0;
  }
  getLoadFactor() {
    return this.count / this.size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }
  insert(key, value) {
    let index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = [];
    }
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        pair[1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
    this.count++;
    if (this.getLoadFactor() > 0.75) {
      let newSize = Math.floor(this.size * 2);
      this.rehash(newSize);
    }
  }

  get(key) {
    let index = this.hash(key);
    for (let pair of this.table[index]) {
      if (pair[0] === key) {
        return pair[1];
      }
    }
    return undefined;
  }
  remove(key) {
    let index = this.hash(key);
    if (!this.table[index]) return false;
    this.table[index] = this.table[index].filter((item) => item[0] !== key);
    this.count--;
    if (this.getLoadFactor() < 0.35) {
      let newSize = Math.floor(this.size / 2);
      this.rehash(newSize);
    }
  }
  rehash(size) {
    console.log("resizing : ", size);
    this.size = size;
    this.count = 0;
    let oldTable = this.table;
    this.table = new Array(size);
    for (let i = 0; i < oldTable.length; i++) {
      let bucket = oldTable[i];
      if (!bucket) continue;
      for (let j = 0; j < bucket.length; j++) {
        let [key, value] = bucket[j];
        this.insert(key, value);
      }
    }
  }
  print() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
    console.log("size : ", this.size);
  }
}
const hash = new HashTable(2);
hash.insert("name", "haran");
hash.insert("mane", "haran");
hash.insert("age", 22);
hash.insert("place ", "malappuram");
hash.insert("phone ", "7994102605");

console.log(hash.get("name"));
hash.print();

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
