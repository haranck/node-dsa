const EventEmitter = require('events')

class ErrorEmitter extends EventEmitter{}

const eventEmitter = new ErrorEmitter()

eventEmitter.on('error',(error)=>{
    console.log('Error occured : ',error.message)  
})

module.exports = eventEmitter 