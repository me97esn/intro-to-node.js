const request = require('request')
const quote = request.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand', function (err, res, body) {
  const json = JSON.parse(body)
  console.log(json[0].content)
})
