const express = require('express')
const app = express()
function index (req, res) {
  unirest.get('https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi')
    .header('X-RapidAPI-Key', '0bfaf0c858msh26db4a7e75e1712p1d14a4jsn4d643bf9a742')
    .end(function (result) {
      console.log(result.status, result.headers, result.body)
    })
  res.send('Hello world!')
}
app.get('/', index)

app.listen(3000)
