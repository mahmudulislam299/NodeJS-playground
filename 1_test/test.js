let names = "mahmud";

console.log(names);

function greet(userName) 
{
	console.log('hello ', userName);
}

const greet2 = (username) => 
{
	console.log('hello,' ,username);
};
for(let i = 0; i< 5; i++)
{
	console.log(i);
	if (i == 4)
	{
		console.log('hello, ${userName}');
	}
}

greet('mahmudul');
greet('robince');
greet2('islam');