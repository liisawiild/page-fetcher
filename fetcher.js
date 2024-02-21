const cmdLine = process.argv.slice(2);   //slice turns it into array
// cmdLine[2] = URL, --- download resource at this location
//cmdLine[3] = local path  --- save resource to this location
//print message to server "Downloaded and saved # of bytes to local path"

const request = require('request');

request(cmdLine[2], (error, response, body) => {
  console.log(`Downloaded and saved ${bytes} bytes to ${cmdLine[3]}`)
  console.log('---error:', error);
  console.log('---response:', response);
  console.log('---body:', body);

}))

