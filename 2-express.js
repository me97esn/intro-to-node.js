const express = require('express')
const app = express()
function index (req, res) {
  res.send('Hello world!')
}
app.get('/', index)

app.listen(3000)
