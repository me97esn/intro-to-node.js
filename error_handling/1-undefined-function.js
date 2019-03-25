const request = require('request')
const express = require('express')
const app = express()

function index (req, res) {
  request.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand', function (err, res, body) {
    const json = JSON.parse_oops(body)
    res.send('Hello world!')
  })
}
app.get('/', index)
console.log('listening on localhost:3000')
app.listen(3000)
