// Need to import built in file system module in node
// file system module is called fs
const fs = require('fs') 



// reading files

// // this function (readFile) is non blocking
// fs.readFile('./docs/blog1.txt',(err, data) => 
// {
// 	if(err)
// 	{
// 		console.log(err);
// 	}
// 	console.log(data.toString());
// });

// console.log('last line');



// writing files

// // if the file does not exist, this will create the file 
// fs.writeFile('./docs/blog1.txt', 'hello, robince', () =>
// {
// 	console.log('file is written');
// });


// directories
// if(!fs.existsSync('./assets'))
// {
// 	fs.mkdir('./assets', (err)=>
// 	{
// 		if(err)
// 		{
// 			console.log(err);
// 		}
// 		console.log('folder created');
// 	});
// }
// else
// {
// 	fs.rmdir('./assets', (err)=>
// 	{
// 		if(err)
// 		{
// 			console.log(err);
// 		}
// 		console.log('folder deleted');
// 	})
// }




// deleting files
if(fs.existsSync('./docs/deleteme.txt'))
{
	fs.unlink('./docs/deleteme.txt', (err) => // this function is used for delete file
	{
		if(err)
		{
			console.log(err);
		}
		console.log('file deleted');
	})
}
 