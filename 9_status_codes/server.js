// import http module
const http = require('http'); 

// import filesystem module
const fs = require('fs');

// create server method
// as argument it create call back function
// send request to server
// sen response to browser
const server = http.createServer((req, res) =>
{
	console.log('request made from browser');

	// what kind of request come from browser will come here
	console.log('request url:', req.url, '\nreq method:', req.method);

	// writing response 3 steps ---> 1 . setHeader 2. write response 3. end response
	
	// sending html file 

	// set header content type
	res.setHeader('Content-Type', 'text/html'); 

	let path = './views/';

	switch(req.url)
	{
		case '/':
			path +='index.html';
			res.statusCode = 200;
			break;

		case '/about':
			path +='about.html';
			res.statusCode = 200;
			break;

		default:
			path +='404.html';
			res.statusCode = 404;
			break;
	}
	
	console.log(path);
	
	// send html file from filesystem
	fs.readFile(path, (err, data) =>
	{
		if(err)
		{
			console.log(err);
			res.end(); // end the response
		}
		else
		{
			// res.write(data);
			// res.end(); // end the response

			// we can use end directly instead of write
			res.end(data);
		}
	})
	
});


//port number are like 'doors' into a computer
let portNumber = 3000;
let host = 'localhost';
server.listen(portNumber, host, () =>
{
	console.log('listening for request on port 3000');
});