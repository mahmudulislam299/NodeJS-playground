const fs = require('fs') // import file system module

// tells where to read data from
const readStream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});

const writeStream = fs.createWriteStream('./docs/blog4.txt');


// this is data event. // event listener
// everytime we find the data call the callback function
readStream.on('data', (chunk) =>  
{
	console.log('-------- NEW CHUNK-----------');
	console.log(chunk);
	writeStream.write('\nNEW CHUNK\n');
	writeStream.write(chunk);
});