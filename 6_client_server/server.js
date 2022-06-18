// import http module
const http = require('http');

// create server method
// as argument it create call back function
// send request to server
// sen response to browser
const server = http.createServer((req, res) =>
{
	console.log('request made');
	// console.log(req);
	// what kind of request come from browser will come here
	console.log('request url:', req.url, '\nreq method:', req.method);

	// writing response 3 steps
	//1 . setHeader 2. write response 3. end response

	// set header content type
	// res.setHeader('Content-Type', 'text/plain'); //sending plain text
	res.setHeader('Content-Type', 'text/html'); // sending html

	// step 2: write response
	// res.write('hello, from server'); // sending plain text
	
	res.write('<head><link rel = "stylesheet" href="#"</head>'); // sending html
	res.write('<p>Hello from node server</p>'); // sending html
	res.write('<p>Hello, Mahmudul Islam Robince</p>'); // sending html

	// step 3: end response
	res.end();
});

//port number are like 'doors' into a computer
let portNumber = 3000;
let host = 'localhost';
server.listen(portNumber, host, () =>
{
	console.log('listening for request on port 3000');
});