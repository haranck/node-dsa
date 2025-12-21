const {spawn} = require('child_process')

const child = spawn('node',['child.js'])

child.stderr.on('data',(error)=>{
  console.log('error : ',error.toString())
})
child.stdout.on('data',(data)=>{
  console.log('data form child : ',data.toString())
})

child.on('close',(code)=>{
  console.log('child exited with code : ',code)
})

