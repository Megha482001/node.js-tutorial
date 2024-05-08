const http = require('http');
const fs = require('fs');
const port = process.env.PORT || 3000;// whatever port I'm having .. I'm taking that

const server = http.createServer((req,res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)
    if (req.url == '/') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html')
        res.end(data.toString());
    }
    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1> About Megha</h1> <p>About megha</p>')
    }
    else if (req.url == '/cwh') {
      //  res.statusCode = 200;
      //  const data = fs.readFileSync('index.html')
        res.end('<h1>Megha</h1><p>I am a girl</p>');
    }
    else{
        res.statusCode = 404;
        res.end('<h1> not found</h1> <p>page was not found on this server</p>');
    }
    
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});