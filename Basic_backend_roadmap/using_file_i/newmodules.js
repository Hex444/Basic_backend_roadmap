const fs = require("fs");
let text = fs.readFileSync("sampletext.txt", "utf-8");
console.log(text);
text = text.replace('sample', "non-sample");
console.log(text);

fs.writeFileSync('sampletext.txt', "nothingness bro");