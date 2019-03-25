const express = require('express')
const app = express()
const request = require('request')
const { promisify } = require('util')
const get = promisify(request.get)

async function index (req, response) {
    try {
        const quoteResponse =  await get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand')
        const json = JSON.parse(quoteResponse.body)

        response.send(json[0].content)

    } catch (error) {
        console.log(error)
        response.send(error.message)
    }
}

app.get('/', index)
console.log('listening on localhost:3000')
app.listen(3000)
