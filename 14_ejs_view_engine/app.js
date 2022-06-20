// express app make life easier for http module
const express = require('express');

// create express app 
const app = express();

//register view engine
app.set('view engine', 'ejs');
// app.set('views', 'myviews'); // this is needed when we save views folder different name such as myviews

// listen to port 3000 for request
let portNumber = 3000;
app.listen(portNumber);



app.get('/', (req, res) =>
{
	// res.send('<p>home page</p>');
	// res.sendFile('./views/index.html', {root: __dirname}); 
	res.render('index'); // ejs will search views folder to find index.ejs 
	
});

app.get('/about', (req,res)=> 
{
	// res.send('<p>about</p>');
	// res.sendFile('./views/about.html', {root: __dirname});
	res.render('about');
});


app.get('/home', (req,res)=> 
{
	// res.send('<p>home</p>');
	res.render('index');
});

app.get('/blogs/create', (req,res)=>
{
	res.render('create');
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
app.use((req,res)=>
{
	res.render('404');
});
