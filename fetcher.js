
const request = require('request');
const fs = require('fs');


const cmdLine = process.argv.slice(2);
let URL = cmdLine[0];
let path = cmdLine[1];

request(URL, (error, response, body) => {
  // console.log('---error:', error);
  // console.log('---response:', response);
  // console.log('---body:', body);

  //function to write/download (fs = filesystem) body to a local file (NOT writeFileSync, or pipe function)
  fs.writeFile('./fetchedData.html', body, err => {
    if (err) {
      console.log(err);
    } else {
      let bytes = body.length;
      console.log(`Downloaded and saved ${bytes} bytes to ${path}`);
    }
  });

});








