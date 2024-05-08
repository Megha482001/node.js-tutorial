const http = require('http');

const port = process.env.PORT || 3000;// whatever port I'm having .. I'm taking that

const server = http.createServer((req,res)=>{
    console.log(req.url)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1> This is Megha</h1> <p>I am learning fullstack Webdevelopment</p>')
})

server.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`);
});