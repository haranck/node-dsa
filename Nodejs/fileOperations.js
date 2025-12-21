// readfile writefile  existsync
// rename unlink readFile appendFile writeFile

// const fs  = require('fs')

// fs.readFile('input.txt','utf-8',(err,data)=>{
//    if(err)throw new Error
//    console.log(data)
// })

// fs.writeFile('input.txt',' hello ',(err)=>{
//    if(err)throw new Error
//    console.log('file writed successfully')
// })

// fs.appendFile('input.txt','hellooo',(err)=>{
//    if(err)throw new Error
//    console.log('appended')
// })

// fs.readFile('input.txt','utf-8',(err,data)=>{
//    if(err)throw new Error
//    console.log(data)
// })

// if(fs.existsSync('input.txt')){
//    console.log('file exists')
// }else{
//    console.log('not exists')
// }  

// fs.rename('out.txt','output.txt',(err)=>{
//    console.log('renamed the file')
// })

// fs.unlink('sample.txt',(err)=>{
//    if(err)throw new Error
//    console.log('file deleted successfully')
// })

// fs.mkdir('mydir',{recursive:true},(err)=>{
//    if(err)throw err
//    console.log('directory created')
// })

// fs.rmdir('mydir',{recursive:true},(err)=>{
//    if(err) throw err
//    console.log('directiory deleted')
// })

// // fs.readdir('mydir',(err,data)=>{
// //    if(err)throw err
// //    console.log('dir readed data : ',data)
// // })


const fs = require("fs");

fs.link('input.txt', 'new.txt', (err) => {
  if (err) throw err;
  console.log("Hard link created");
}); 
