const fs = require('fs')
fs.readFile('./hello_world/text.txt', 'utf-8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
