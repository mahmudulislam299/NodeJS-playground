const peopleName = ['mahmudul', 'islam', 'robince', 'mahmud'];
const age = [21,22,23,24];

console.log('this is printing in people file', peopleName);

// module.exports = peopleName;

module.exports = {  // export
	peopleName,
	age
};