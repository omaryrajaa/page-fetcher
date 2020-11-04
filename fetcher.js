const request = require('request');
const fs = require('fs');
const URL = process.argv[2];
const path = process.argv[3];
request(URL , (error, response, body) => {
  if (error) throw error;
  //console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  let buffer = body;
  fs.open(path, 'a', function(err, fd) {
    if (err) {
      throw err;
    } else {
      let callback = function(err, writtenbytes) {
        if (err) throw err;
        console.log('Downloaded and saved ' + writtenbytes + ' bytes to ' + path);
      };
      fs.write(fd, buffer, callback);

    }

  });
});
