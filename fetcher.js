
const request = require('request');
const fs = require('fs');

const cmdLine = process.argv.slice(2);
let URL = cmdLine[0];
let path = cmdLine[1];

request(URL, (error, response, body) => {
  fs.writeFile('./fetchedData.html', body, err => {
    if (err) {
      console.log(err);
    } else {
      let bytes = body.length;
      console.log(`Downloaded and saved ${bytes} bytes to ${path}`);
    }
  });

});








