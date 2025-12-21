process.on('message',(data)=>{
    console.log('recieved data from parent' ,data)
    let sum = data.num1+data.num2
    process.send(sum)
})