const {Worker} = require('worker_threads')

console.log('workers are started')

const worker = new Worker('./worker.js')

worker.on('message',(data)=>{
    console.log('data from worker ',data)
})

worker.on('exit',()=>{
    console.log('worker finished and exited')
})

console.log('main threas is free worker are performed in background')

