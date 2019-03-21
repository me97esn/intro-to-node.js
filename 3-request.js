const request = require('request')
const quote = request.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand')
console.log(quote)
