
const validateHeader = (req,res,next ) =>{
    let apikey = req.header('x-api-key')
    console.log(apikey)
    if(!apikey){
        return res.status(500).json({error:'missing api key in header'})
    }
    if(apikey !== 'mySecretKey'){
        return res.status(500).json({error:'invalid api key'})
    }else{
        console.log('header validated')
        next()
    }
}

module.exports = validateHeader     

