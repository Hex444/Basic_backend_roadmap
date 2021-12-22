// synchronous or blocking code
// line by line excecution

// asyncronous or non-blocking code 
// line by line excecution not guaranteed
// callbacks will fire 
const fs = require("fs");

// callback function
fs.readFile("/sampletext.txt", "utf-8", (err, data)=>{
    console.log(data);
});  
