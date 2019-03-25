const request = require('request')
const express = require('express')
const app = express()

function index (req, response) {
  request.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand', function (err, res, body) {
    const json = JSON.parse(body)
    response.send(json[0].content)
  })
}
app.get('/', index)
console.log('listening on localhost:3000')
app.listen(3000)
