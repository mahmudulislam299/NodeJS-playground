// const xyz = require('./people'); // importing people js file in the module file // this is one kind of import

// console.log(xyz);
// console.log(xyz.peopleName, xyz.age);


const { peopleName, age} = require('./people'); //import people file
console.log(peopleName, age);

const os = require('os'); // import operating system information

console.log(os.platform(), os.homedir());