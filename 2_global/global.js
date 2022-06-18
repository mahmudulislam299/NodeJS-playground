// global object

// console.log(global);

const t = setTimeout(() => 
{
	console.log('in the timeout');
	clearInterval(int);
}, 5000);

const t2 = setTimeout(() => 
{
	console.log('time out for every 500 ms');
	clearInterval(int2);
}, 7000);

const int = setInterval(() => {
	console.log('in the interval');
}, 1000);

const int2 = setInterval(() => {
	console.log('print every 500ms');
},500);

console.log('printing dir name and file name...........................');

console.log(__dirname);
console.log(__filename);