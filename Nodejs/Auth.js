
const Auth = (req, res, next) => {
  if (req.method === 'POST') {
    console.log('post request blocked')
    return res.send('post requests should block')
  }
  next()
}

module.exports = Auth
