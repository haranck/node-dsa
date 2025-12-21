const {exec} = require('child_process')
const { stdout, stderr } = require('process')

exec('node -v',(error,stdout,stderr)=>{
    if(error){
        console.log("error:",error.message)
        return
    }
    if(stderr){
        console.log('Error ;',stderr.message)
    }
    console.log("output : ",stdout)
})
