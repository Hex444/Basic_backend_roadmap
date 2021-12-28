// pls install express before running this and delete the old files (if there are any) because i might delete the node_modules folder for disk space issues
// sudo -s to run as admin



// express app

// INSERTING MODULES, SETTING PORT AND INITIALIZING APP  
const express = require('express');
const path = require('path')
// to initialize an app
const app = express();
const port = 80;






// EXPRESS SPECIFIC
app.use('/static', express.static('static')) // for serving static files

// PUG SPECIFIC
app.set('view engine', 'pug') // set template engine as pug
app.set('views', path.join(__dirname, 'views')) // setting views path







// ENDPOINTS
app.get('/', (req,res)=>{
    const con = "Best content ever is in youtube"
    const params = {'title': "pug is cool but complicated", content:con};
    res.status(200).render('index.pug', params);
})


// STARTING SERVER
app.listen(port, ()=>{
    console.log(`app started succesfully on port ${port}`);
}




































// // pug demo end point
// app.get('/demo', (req,res)=>{
//     res.status(200).render('demo', {title: 'Hey yo', message: 'Hello there'})
// })

// // handles get requests
// app.get('/', (req,res)=>{
    //     res.status(200).send('Home page of first express app');
    // });
    // app.get('/about', (req,res)=>{
        //     res.send('About page of first express app');
// });
// // handles post req
// app.post('/about', (req,res)=>{
    //     res.send('About page of first express app');
    // });
    // app.post('/this', (req,res)=>{
//     res.status(404).send('This page is not found');
// });
)