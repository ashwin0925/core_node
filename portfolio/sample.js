const http = require('http')
const fs = require('fs')

const userPath = __dirname + '/' + 'public/';
console.log(userPath)
const userCss = __dirname + '/' + 'public' + '/' + 'assets' + '/' + 'stylesheet/';
console.log(userCss)
var server = http.createServer(requestHandler);

function requestHandler(req, res) {
  console.log(req.url); // to check how many requests are coming 
  // handle all html file together
  if(req.url === '/') {
    // set appropriate headers
    res.setHeader('Content-Type', 'text/html')
    // read file and send chunked data in response
    fs.createReadStream(userPath + 'index.html').pipe(res);

    // for all css files
  } else if(req.url ==='/gallery'){
    res.setHeader('Content-Type', 'text/html')
    fs.createReadStream(userPath + 'gallery.html').pipe(res);

  } else if(req.url.includes('css')) {
    //handle css file here
    // first set headers ie. 'text/css'
    // read css file and send it in response using createReadStream
      res.setHeader('Content-Type', 'text/css')
      fs.createReadStream(userCss + 'style.css' ).pipe(res) // we can use (userPath + req.url)

    // for handling images
  } else if(['png', 'jpg', 'jpeg'].indexOf(req.url.split('.').pop()) > -1) {
    //send images here with appropraite content type
    res.setHeader('Content-Type', 'image/jpg')
    fs.createReadStream(userPath + req.url).pipe(res);
  } else {
    res.statusCode = 404;
    res.end('Page not found')
  }
}

server.listen(3001);
