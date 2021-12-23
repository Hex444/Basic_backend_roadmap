// a simple backend server ikik its trash but works

const http = require("http");
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 80; 
const home = fs.readFileSync("./index.html")
const about = fs.readFileSync("./about.html")
const contact = fs.readFileSync("./contact.html")


const server = http.createServer((req,res)=>{
    // console.log(req.url);
    let url = req.url
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    if(url == '/'){
        res.end(home)
    }
    else if(url == '/about'){
        res.end(about);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{
        res.end('<h1>404 not found</h1>');
        res.statusCode = 200;
    }
})

server.listen(port, hostname, ()=> {
    console.log(`server running at http://${hostname}:${port}/`)
})  