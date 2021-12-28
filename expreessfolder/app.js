// pls install express before running this because i might delete the node_modules folder for disk space issues







// express app
// sudo -s to run as admin
const express = require('express');
// to initialize an app
const app = express();
const port = 80;

app.use('/static', express.static('static'))

// handles get requests
app.get('/', (req,res)=>{
    res.status(200).send('Home page of first express app');
});
app.get('/about', (req,res)=>{
    res.send('About page of first express app');
});
// handles post req
app.post('/about', (req,res)=>{
    res.send('About page of first express app');
});
app.post('/this', (req,res)=>{
    res.status(404).send('This page is not found');
});
app.listen(port, ()=>{
    console.log(`app started succesfully on port ${port}`);
})