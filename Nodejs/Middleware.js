// error handdling midlware  and block post request 

// const express = require('express')
// const Auth  = require('./Auth')
// const router = express.Router()
// const app  = express()

// router.use(Auth)
// router.get('/',(req,res)=>{
//    res.send('its Landing Page')
// })
// router.get('/home',(req,res)=>{
//    throw new Error('Something went wrong')
// })
// router.post('/post',(req,res)=>{
//    res.send('its post request')
// })

// router.use((err,req,res,next)=>{
//    console.log('error',err.message)
//    res.send('home page loading failed ')
// })

// app.use('/',router)

// app.listen(3000,()=>console.log('server is running on port 3000'))


////////////////////////////////////////////////////////////

// const now = new Date()
// let hour = String(now.getHours()) 
// let minute = String(now.getMinutes())
// let second = String(now.getSeconds())
// console.log(`${hour}:${minute}:${second}`)

// const cron = require('node-cron'); 

// cron.schedule('0 0 * * *', () => {
//   console.log('Runs every minute');
// });  

///////////////////////////////////////////////////////////

// promisfy

// const fs = require('fs')
// const util = require('util')
// // fs.readFile('input.txt','utf8',(err,data)=>{
// //    if(err)throw new Error
// //    console.log(data) 
// // })

// const readFileUtil = util.promisify(fs.readFile)

// async function reading (){
//    try {
//       const data = await readFileUtil('input.txt','utf-8')
//       console.log(data)
//    } catch (error) {
//       console.log(error)
//    }
// }
// reading() 


// fs/promises (Promise-based File System)

// const {appendFile,readFile} = require('fs/promises')

// async function readfile (){
//     try{
//         const data = await readFile('output.txt','utf8')
//         await appendFile('input.txt',data)
//         const result  = await readFile('input.txt','utf8')
//         console.log(result)
//     }catch(err){
//         console.log(err)
//     }
// } 
// readfile()


////////////////////////////////////////////////////////////////////////

// content negotiation

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {

//   const accept = req.headers['accept'];

//   if (accept.includes('application/json')) {
//     res.json({ name: 'haran', age: 22 });
//   } else if (accept.includes('text/html')) {
//     res.send('<h1>Haran - 22</h1>');
//   } else {
//     res.status(400).send('Not acceptable');
//   }
// });

// app.listen(3000, () => console.log('Server running on port 3000'));

//////////////////////////////////////////////////////////////////////////////

// const express = require('express')
// const rateLimiter = require('express-rate-limit')
// const app = express()

// let limiter = rateLimiter({
//     windowMs:1000*10,
//     max:5,
//     message:'limit exceeded try agin after one minute'
// })

// app.get('/',limiter,(req,res)=>{
//     res.send('hello')
// })
// app.listen(3000,()=>console.log('server running'))

////////////////////////////////////////////////////////////////////

// const express = require('express');
// const validateHeader  = require('./validateHeader');
// const app = express();

// app.get('/',validateHeader,(req, res) => {

//     res.send('hello Haran Krishna...... ')
//     // res.status(200).json({message:'helloo haran krishna....'})
// })

// app.listen(3000, () => console.log('Server running on port 3000'))

/////////////////////////////////////////////////////////////////////

// // errorEmitter.js

// const express = require('express')
// const app = express()
// const ErrorEmitter = require('./ErrorEmitter')

// app.get('/',(req,res)=>{
//     try {
//         throw new Error('SOMETHING WENT WRONG')
//     } catch (error) {
//         ErrorEmitter.emit('error',error)
//         res.status(500).send('internal server error')
//     }
// })
// app.listen(3000,()=>console.log('server running'))


//////////////////////////////////////////////////////////////////////////

// const fs = require('fs')

// const readStream = fs.createReadStream('input.txt','utf-8')

// readStream.on('data',(chunk)=>{
//     console.log('data : ',chunk)
// })
// readStream.on('end',()=>{
//     console.log('successfully readed and ended')
// })
// readStream.on('error',(err)=>{
//     console.log('Eror : ',err.message)
// })

// const writeStream = fs.createWriteStream('output.txt')

// writeStream.write('this is output file')
// writeStream.end()
// writeStream.on('finish',()=>{
//     console.log('file created and finished')
// })
// writeStream.on('error',(err)=>{
//     console.log('Error : ',err.message)
// })

////////////////////////////////////////////////////////////////////

// pipe
         
// const fs = require('fs')

// const readStream = fs.createReadStream('input.txt','utf-8')
// const writeStream = fs.createWriteStream('output.txt',{flags:'a'})

// readStream.pipe(writeStream)

// readStream.on('finish',()=>{
//     console.log('file copied successfully')  
// })

///// call apply bind 

// let emp = { id: 1, name: "Anu", salary: 30000, department: "HR" }


// function print(a){
//     console.log(this.id)
//     console.log(this.name)
//     console.log(this.salary)
//     console.log(this.department)
//     console.log(a)
// }

// print.apply(emp,['hai'])
// print.call(emp,'hai')
// const res = print.bind(emp)

// res('hai')


////////////////////////////////////////////////////////////////// 

// proxy object

// const employees = [
//   { id: 1, name: "Sajid", salary: 200000, department: "HR" },
//   { id: 2, name: "Binu", salary: 45000, department: "IT" },
//   { id: 3, name: "Cinu", salary: 50000, department: "IT" },
//   { id: 4, name: "Anu", salary: 19000, department: "Sales" },
// ];


// const proxyObject = new Proxy(employees, {
//   get(target, handler) {
//     if (handler === 'highSalaryEmp') {
//       return target.filter(employee => employee.salary > 25000);
//     }
//     return target[handler];
//   }  
// });
// console.log(proxyObject.highSalaryEmp)



/////////////////////////////////////////////////////////////////////////////////


// const express =  require('express')
// const app = express()

// app.get('/',(req,res)=>{
//     res.send('its landing page')
// })

// app.get('/home',(req,res)=>{
//     res.send('its Home')
// })

// app.all('/*',(req,res)=>{
//     res.status(404).send('404 - Page not found')
// })
// // app.use((req,res)=>[
// //     res.status(404).send('404 - Page not found')
// // ])

// app.listen(3000,()=> console.log('server running at the port 3000'))






const express = require('express');
const app = express();
const PORT = 3000;

// 1. Define specific routes first
app.get('/', (req, res) => {
  res.send('Welcome home!');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

// 2. Place the wildcard route last to catch all unmatched requests
app.all('/*splat', (req, res) => {
  res.status(404).send('Error 404: Page not found!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

