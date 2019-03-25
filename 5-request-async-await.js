const { promisify } = require('util')
const request = promisify(require('request'))
async function getQuote() {
	const quote =  await request.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand').json()
	console.log(quote)

}
getQuote()
