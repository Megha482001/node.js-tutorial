const fs = require('fs');

//fs.readFile('file.txt', 'utf8', (err, data)=>{
  //  console.log(err,data)
//})
//console.log("Finished reading")
//when ever we are using readfilesync we want node.js to intentionally block something
//const a = fs.readFileSync('file.txt')
//console.log(a.toString()) //when we want to read the content to we use .toString
//console.log("Finished reading")
//fs.writeFile('file2.txt', "this is the data",()=>{
  //  console.log("written to the file")
//});
b = fs.writeFileSync('file3.txt',"This is a data2")
console.log(b)
console.log("Finished reading file") 