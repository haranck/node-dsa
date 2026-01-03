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



