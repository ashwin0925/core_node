var http = require('http')
var fs = require('fs');

// Use fs module for all operatins below.


// 1. Write script to read file theory.md and console the output buffer.
fs.readFile('./theory.md', (err,data)=>{
  if(err) console.log(err) 
  if(data) console.log(data)
})

// 2. Write script to read file theory.md and convert resulted buffer using toString
  // method and console the result.
  fs.readFile('./theory.md', (err,data) => {
    if(err) console.log(err) 
    if(data) console.log(data.toString())
  })

// 3. Write script to read file Synchronously and console the output.
var fileSync = fs.readFileSync('./theory.md')
console.log(fileSync)

// 4. Write script to create a file 'write.js' and write content of read.js in there.
var readFile = fs.readFileSync('./read.js', 'utf-8', (err, data) => {
  if(err) return console.log(err)
})

fs.writeFile('./write.js', readFile, (err) =>{
  if(err) console.log(err)
  console.log('file written successfully')
})

// 5. Write script to update content of write.js. Update it with content of theory.md
//   Steps are
//   - open the file(write.js) using fs.open
//   - remove earlier content using fs.ftruncate
//   - add new content using fs.writeFile
//   - close the file at last using fs.close

var readFile = fs.readFileSync('./read.js', 'utf-8', (err, data) => {
  if(err) return console.log(err)
})

var theoryFile = fs.readFileSync('./theory.md', 'utf-8')
fs.open('./write.js', 'r+', (err, fd) => {
  fs.ftruncate(fd, (err) => {
    if(err) return console.log(err);
    fs.writeFile(fd,theoryFile,(err) => {
      if(err) return console.log(err)
      fs.close(fd,(err) => {
        if(err) return console.log(err)
      })
    })
  })
})

// 6. Delete the content of write.js using fs.unlink or unlinkSync method

//unlink will delete the file
//truncate will delete the content in the file 

fs.truncate('./write.js', (err) => {
  if(err) return console.log(err)
  console.log('content deleted')
})