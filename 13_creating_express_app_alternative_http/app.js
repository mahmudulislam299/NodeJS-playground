// express app make life easier for http module
const express = require('express');

// create express app 
const app = express();

// listen to port 3000 for request
let portNumber = 3000;
app.listen(portNumber);


// status code no need to set
// http header will automatically set
app.get('/', (req, res) =>
{
	// res.send('<p>home page</p>');
	res.sendFile('./views/index.html', {root: __dirname}); 
	// root folder need to be specified
	//__dirname is current main folder name:: 13_creating _express_app
});

app.get('/about', (req,res)=> 
{
	// res.send('<p>about</p>');
	res.sendFile('./views/about.html', {root: __dirname});
});


app.get('/home', (req,res)=> 
{
	// res.send('<p>home</p>');
	res.sendFile('./views/index.html', {root: __dirname});
});

//redirect
app.get('/about-us',(req,res)=>
{
	res.redirect('/about');
});

// 404 page
// if any app.get method is matched this will be called
// for any method this will be called
// warning:: never call this method before any getmethod
//					otherwise this method will be called. 
app.use( (req,res)=>
{
	res.sendFile('./views/404.html', {root: __dirname});
});
