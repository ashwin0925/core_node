var http = require('http');
var url = require('url');
var fs = require('fs')
var qs = require('querystring')

// 1. Write script to create a basic http server using createServer method, write 'Welcome to NodeJS' as response and
// listen for request on port 5555.

var server = http.createServer((req, res) => {
  res.write('Welcome to NodeJS')
  res.end()
}).listen(5555, () => {
  console.log("server started at port 5555")
})

// 2. Write script to create a server, send in response the request headers 
// and add listener on port 6666.

http.createServer((req, res) => {
  res.write(JSON.stringify(req.headers))
  res.end()
}).listen(3000, () => {
  console.log("server started at port 3000")
})

// 3. create a server and console request methods and url by doing request 
// from postman or web browsers.

http.createServer((req, res) => {
  console.log(req.url, req.method)
  res.end('port 3001')
}).listen(3001, () => {
  console.log("server started at port 3001")
})

// 4. create a server
  // - set response headers as 'text/html' using res.setHeader property.
  // - write some HTML content in response
  // - listen on port 6000

  http.createServer((req, res) => {
    res.setHeader('content-type', 'text/html')
    res.write('<h1> Hello World </h1>')
    res.end()
  }).listen(3002, () => {
    console.log("server started at port 3002")
  })

// 5. create a server
  // - create a seperate file index.html and write some html content
  // - read the html file content and send it in response in createServer method
  // - don't forget to set header before writing to response

  http.createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
      if (err) console.log(err)
      res.setHeader('Content-type', 'text/html')
      res.end(data)
    })
  }).listen(3003, () => {
    console.log('server started at port 3003')
  })

// 6. create a server
  // - create 3 diffenrent file ie. index.html, about.html, contact.html
  // - inside createServer, handle different urls for serving different html file
  // - '/' route for index.html file
  // - "/about" for about.html file
  // - "/contact" for contact.html file

  http.createServer((req, res) => {
    if (req.url === '/') {
      fs.readFile('./index.html', (err, data) => {
        if (err) return res.end(err)
        res.setHeader('Content-type', 'text/html')
        res.end(data)
      })
    } else if (req.url === '/about') {
      fs.readFile('./about.html', (err, data) => {
        if (err) return res.end(err)
        res.setHeader('Content-type', 'text/html')
        res.end(data)
      })
    } else if (req.url === '/contact') {
      fs.readFile('./contact.html', (err, data) => {
        if (err) return res.end(err)
        res.setHeader('Content-type', 'text/html')
        res.end(data)
      })
    }
  }).listen(3004, () => {
    console.log('server started at 3004')
  })

// 7. create an Server(echoServer)
  // handle post request for incoming data from postman using req as eventEmitter
  // send incoming data back in response
  
  var server = http.createServer(onRequest)
  function onRequest(req,res){
    var store = '';
    req.on('data', (chunks) => {
        store = store + chunks;
    }).on('end', ()=> {
      res.end(store)
    })
  }

  server.listen(3000)
    

// 8. create a server
  // handle json data from postman
  // parse the json data
  // send json data back in response
  
  http.createServer((req, res) => {
    var store = ''
    req.on('data', (chunk) => {
      store = store + chunk
    })
    req.on('end', () => {
      res.setHeader('Content-type', 'application/json')
      res.end(store)
      console.log(store)
    })
  }).listen(3004, () => {
    console.log('server starting at 3004')
  })

// 9. create a server
  // handle x-www-urlencoded(form data) coming form postman
  // parse form-data using querystring module
  // send data back in response

  http.createServer((req, res) => {
    var store = ''
    req.on('data', (chunk) => {
      store = store + chunk
    })
    req.on('end', () => {
      res.setHeader('Content-type', 'application/json')
      var Parsed = qs.parse(store)
      console.log(Parsed)
      res.end(JSON.stringify(Parsed))
      console.log(store)
    })
  }).listen(3005, () => {
    console.log('server started at 3005')
  })

// 10. create a server and add listener on port 7000
  // send get request on 'http://localhost:7000/new?username=altcampus' from postman or browser
  // parse the request url using 'url' core node module
  // extract protocol, path and pathname, query from the request
  // send path in response

 var server = http.createServer(handleRequest)
  function handleRequest(req,res){
    var parsed = url.parse(req.url,true)
    console.log(parsed);
    res.end(parsed.path)
  }
  server.listen(7000)

  
// 11. Write script to create an absolute and relative path of 'theory.md' from the current file.
  // use path module from core node

  var path = require('path')
  var absolute = path.join(__dirname + '/theory.md')
  var relative = './theory.md'
  console.log(absolute)
  console.log(relative)


